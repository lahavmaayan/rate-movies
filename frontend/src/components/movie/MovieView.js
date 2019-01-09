import React, { Component } from 'react';
import RatingsGrid from './RatingsGrid';

class MovieView extends Component {
    render() {
        return (
            <div>
                <div className="section loader">
                    <div className="title">movie</div>
                    <RatingsGrid />
                </div>
            </div>
        );
    }
}

export default MovieView;
