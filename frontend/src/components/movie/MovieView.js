import React, { Component } from 'react';
import RatingsGrid from './RatingsGrid';
import Modal from 'react-responsive-modal';
import RateMovie from '../rateMovie/RateMovie';
import { connect } from 'react-redux';
import { FETCH_SUCCESS } from './MovieReducer';

class MovieView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    openModal = () => {
        this.setState({ show: true });
    };

    closeModal = () => {
        this.setState({ show: false });
    };

    async loadMovieData(movieId) {
        const movieDataServer = await this.load('api/movie/' + movieId);
        return this.tmpConvertMovieData(movieDataServer);
    }

    async load(url) {
        const resp = await fetch(url);
        if (!resp.ok) {
            throw Error(resp.statusText);
        }
        return await resp.json();
    }

    tmpConvertMovieData(serverMovieData) {
        let ratings = [];
        for (var prop in serverMovieData.tags) {
            if (prop == '_id') continue;
            ratings.push({
                feature: prop,
                rating: serverMovieData.tags[prop].avg,
                maxRating: 5
            });
        }
        return {
            name: serverMovieData.name,
            ratings: ratings
        };
    }

    componentDidMount() {
        const movieId = '5c4c39eb7555a317d4f816bf'; //tmp until recieved from outside
        this.loadMovieData(movieId)
            .then(movieData =>
                this.props.dispatch({
                    type: FETCH_SUCCESS,
                    payload: { movieData: movieData }
                })
            )
            .catch(exception => console.error(exception));
    }

    render() {
        const { show } = this.state;
        return (
            <div>
                <div className="title">{this.props.movie.name}</div>
                <RatingsGrid ratings={this.props.movie.ratings} />
                <button onClick={this.openModal}>clickkkk</button>
                <Modal open={show} onClose={this.closeModal}>
                    <RateMovie />
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    movie: state.currentMovie
});
export default connect(mapStateToProps)(MovieView);
