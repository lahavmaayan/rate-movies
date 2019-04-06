import React, { Component } from 'react';

import Modal from 'react-responsive-modal';
import RatingsGrid from './views/RatingsGrid';
import RateMovie from './rateMovie/RateMovie';
import MovieDetails from './views/MovieDetails';
import Loader from 'common/components/Loader';
import { get, post } from 'services/restMethods';

export default class MovieView extends Component {
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
        //RatingsGrid assume input is Dictionary
        movieData.ratings = this.convertObjToDictionary(
            movieDataServer.ratings
        );
        return movieData;
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
            reviewerQuestions
        } = this.props;
        await post('/api/movie/5ca06eebb175653a40364485/rate', {
            reviewerDetails,
            reviewerRating,
            reviewerQuestions
        });
        await this.closeModal();
    };

    render() {
        const movie = this.props.movie;
        if (!movie) {
            return <Loader />;
        }

        const { show } = this.state;
        return (
            <div className="center-container">
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
}
