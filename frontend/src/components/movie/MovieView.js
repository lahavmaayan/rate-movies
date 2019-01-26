import React, { Component } from 'react';
import RatingsGrid from './RatingsGrid';
import Modal from 'react-responsive-modal';
import RateMovie from '../rateMovie/RateMovie';

class MovieView extends Component {
    constructor(props) {
        super(props);
        const emptyMovie = {
            name: '',
            ratings: []
        };
        this.state = {
            movieId: '5c4c39eb7555a317d4f816bf', //tmp until recieved from outside
            movie: emptyMovie,
            show: false
        };
    }

    openModal = () => {
        this.setState({ show: true });
    };

    closeModal = () => {
        this.setState({ show: false });
    };

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
        fetch('api/movie/' + this.state.movieId)
            .then(response => response.json())
            .then(data =>
                this.setState({ movie: this.tmpConvertMovieData(data) })
            );
    }

    render() {
        const { show } = this.state;
        return (
            <div>
                <div className="title">{this.state.movie.name}</div>
                <RatingsGrid ratings={this.state.movie.ratings} />
                <button onClick={this.openModal}>clickkkk</button>
                <Modal open={show} onClose={this.closeModal}>
                    <RateMovie />
                </Modal>
            </div>
        );
    }
}

export default MovieView;
