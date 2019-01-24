import React, { Component } from 'react';
import RatingsGrid from './RatingsGrid';
import Modal from 'react-responsive-modal';
import RateMovie from '../rateMovie/RateMovie';

class MovieView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ratings: [
                { feature: 'funny', rating: 4, maxRating: 5 },
                { feature: 'interesting', rating: 3, maxRating: 5 },
                { feature: 'female lead', rating: 3, maxRating: 5 },
                { feature: 'happy ending', rating: 3, maxRating: 5 },
                { feature: 'make you think', rating: 3, maxRating: 5 },
                { feature: 'interesting2', rating: 3, maxRating: 5 }
            ],
            show: false
        };
    }

    openModal = () => {
        this.setState({ show: true });
    };

    closeModal = () => {
        this.setState({ show: false });
    };

    render() {
        const { show } = this.state;
        return (
            <div>
                <div className="title">movie</div>
                <RatingsGrid ratings={this.state.ratings} />
                <button onClick={this.openModal}>clickkkk</button>
                <Modal open={show} onClose={this.closeModal}>
                    <RateMovie />
                </Modal>
            </div>
        );
    }
}

export default MovieView;
