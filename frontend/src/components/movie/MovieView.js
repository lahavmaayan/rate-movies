import React, { Component } from 'react';
import Loader from 'common/components/Loader';

class MovieView extends Component {
    render() {
        return (
            <div>
                <div className="section loader">
                    <div className="title">movie</div>
                    <Loader />
                </div>
            </div>
        );
    }
}

export default MovieView;
