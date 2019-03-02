import React, { Component } from 'react';
import RatingsGrid from './RatingsGrid';
import Modal from 'react-responsive-modal';
import RateMovie from '../rateMovie/RateMovie';
import { connect } from 'react-redux';
import { LOAD_SUCCESS, LOAD_START } from './MovieReducer';

class MovieView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    componentDidMount() {
        this.props.dispatch({ type: LOAD_START });
        const movieId = '5c4c39eb7555a317d4f816bf'; //tmp until recieved from outside
        this.loadMovieData(movieId)
            .then(movieData =>
                this.props.dispatch({
                    type: LOAD_SUCCESS,
                    payload: { movieData: movieData }
                })
            )
            .catch(exception => {
                console.error(exception);
            });
    }

    render() {
        const { show } = this.state;
        return (
            <div>
                <div className="title">{this.props.movie.name}</div>
                <RatingsGrid ratings={this.props.movie.ratings} />
                <button onClick={this.openModal}>Rate me</button>
                <Modal
                    classNames="rate-modal"
                    center
                    open={show}
                    onClose={this.closeModal}
                >
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
        const movieDataServer = await this.load('api/movie/' + movieId);
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
            if (prop == '_id') continue;
            dict.push({
                feature: prop,
                rating: obj[prop].avg,
                maxRating: 5
            });
        }
        return dict;
    }
}

const mapStateToProps = state => ({
    movie: state.currentMovie
});
export default connect(mapStateToProps)(MovieView);
