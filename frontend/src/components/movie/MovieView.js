import React, { Component } from 'react';
import RatingsGrid from './RatingsGrid';
import Modal from 'react-responsive-modal';
import RateMovie from '../rateMovie/RateMovie';
import { connect } from 'react-redux';
import { getLoadFunc } from './MovieReducer';

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

    componentDidMount() {
        this.props.dispatch(getLoadFunc());
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
