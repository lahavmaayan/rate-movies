import React, { Component } from 'react';
import Loader from 'common/components/Loader';

class RateMovieView extends Component {
    render() {
        return (
            <div>
                <div className="section loader">
                    <div className="title">rate-movie</div>
                    <Loader />
                </div>
            </div>
        );
    }
}

export default RateMovieView;
