import React, { Component } from 'react';
import Loader from 'common/components/Loader';

class SearchMovieView extends Component {
    render() {
        return (
            <div>
                <div className="section loader">
                    <div className="title">search-movie</div>
                    <Loader />
                </div>
            </div>
        );
    }
}

export default SearchMovieView;
