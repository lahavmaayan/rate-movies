import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';
import RatingsGrid from './RatingsGrid';
import RateMovie from '../rateMovie/RateMovie';
import { LOAD_SUCCESS, LOAD_START } from './MovieReducer';
import MovieDetails from './MovieDetails';
import Loader from 'common/components/Loader';

class MovieView extends Component {
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

    render() {
        const movie = this.props.movie;
        if (!movie) {
            return <Loader />;
        }

        const { show } = this.state;
        return (
            <div>
                <MovieDetails movie={movie} />
                <hr />
                <h2> Ratings </h2>
                <RatingsGrid ratings={movie.ratings} />
                <button onClick={this.openModal}>Rate me</button>
                <Modal center open={show} onClose={this.closeModal}>
                    <RateMovie />
                </Modal>
            </div>
        );
    }

    openModal = () => {
        this.setState({ show: true });
    };

    closeModal = () => {
        this.setState({ show: false });
    };

    async loadMovieData(movieId) {
        const movieDataServer = await this.load(`/api/movie/${movieId}`);
        let movieData = movieDataServer;
        //RatingsGrid assume input is Dictionary
        movieData.ratings = this.convertObjToDictionary(movieDataServer.tags);
        return movieData;
    }

    async load(url) {
        const resp = await fetch(url);
        if (!resp.ok) {
            throw Error(resp.statusText);
        }
        return await resp.json();
    }

    convertObjToDictionary(obj) {
        let dict = [];
        for (var prop in obj) {
            if (prop === '_id') continue;
            dict.push({
                feature: prop,
                rating: obj[prop].avg,
                maxRating: 5
            });
        }
        return dict;
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadStart: () => dispatch({ type: LOAD_START }),
        loadSucseed: movieData =>
            dispatch({ type: LOAD_SUCCESS, payload: { movieData: movieData } })
    };
}

const mapStateToProps = state => ({
    movie: state.currentMovie
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieView);
