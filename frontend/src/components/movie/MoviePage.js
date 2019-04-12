import React, { Component } from 'react';

import Modal from 'react-responsive-modal';
import RatingsGrid from './views/RatingsGrid';
import RateMovie from './rateMovie/RateMovie';
import MovieDetails from './views/MovieDetails';
import { get, post } from 'services/restMethods';

export default class MoviePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    async componentDidMount() {
        try {
            const { loadStart, loadSucseed } = this.props;
            loadStart();
            const movieId = this.props.match.params.movieId;
            const movieData = await this.loadMovieData(movieId);
            loadSucseed(movieData);
        } catch (exception) {
            console.error(exception);
        }
    }

    openModal = () => {
        this.setState({ show: true });
    };

    closeModal = () => {
        this.setState({ show: false });
    };

    async loadMovieData(movieId) {
        const movieDataServer = await get(`/api/movie/${movieId}`);
        let movieData = movieDataServer;
        if (movieData.fmScore) {
            //RatingsGrid assume input is Dictionary
            movieData.ratings = this.convertObjToDictionary(
                movieDataServer.ratings
            );
            this.convertRatingsNames(movieData.ratings);
            movieData.tags = this.convertTagsNames(movieData.tags);
        } else {
            movieData.ratings = {};
            movieData.tags = {};
        }
        return movieData;
    }

    convertRatingsNames(ratings) {
        for (let index in ratings) {
            const rating = ratings[index];
            rating.feature = this.displayName(rating.feature);
        }
    }

    convertTagsNames(tags) {
        return tags.map(tag => this.displayName(tag));
    }

    displayName(ratingPropName) {
        let res = ratingPropName;
        switch (ratingPropName.toLowerCase()) {
            case 'femaleLead'.toLowerCase():
                res = 'Strong Female Lead';
                break;
            case 'minorityRepresentation'.toLowerCase():
                res = 'Minority Group Representation';
                break;
            case 'sexualityRate'.toLowerCase():
                res = 'Sexual Violante';
                break;
            case 'BechdelTest'.toLowerCase():
                res = 'Bechdel Test';
                break;
        }
        return res;
    }

    convertObjToDictionary(obj) {
        let dict = [];
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                if (prop === '_id') continue;
                dict.push({
                    feature: prop,
                    rating: obj[prop].avg,
                    maxRating: 5
                });
            }
        }
        return dict;
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {
            reviewerDetails,
            reviewerRating,
            reviewerQuestions,
            location
        } = this.props;
        const movieId = location.pathname.split('/')[2];
        await post(`/api/movie/${movieId}/rate`, {
            reviewerDetails,
            reviewerRating,
            reviewerQuestions
        });
        await this.closeModal();
    };

    movieView(movie) {
        const { show } = this.state;
        return (
            <div>
                <MovieDetails movie={movie} />
                <hr />
                <RatingsGrid ratings={movie.ratings} />
                <button onClick={this.openModal}>Rate me</button>
                <Modal center open={show} onClose={this.closeModal}>
                    <RateMovie handleSubmit={this.handleSubmit} />
                </Modal>
            </div>
        );
    }

    movieNotFound() {
        return (
            <div>
                <h1>Sorry :-( </h1>
                <p>
                    It seems we are having some problem. the movie cannot be
                    found. please try again.
                </p>
            </div>
        );
    }

    render() {
        const movie = this.props.movie;
        return (
            <div className="horizontal-centered top-spaced">
                {movie ? this.movieView(movie) : this.movieNotFound()}
            </div>
        );
    }
}
