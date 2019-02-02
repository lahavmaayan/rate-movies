import React, { Component } from 'react';
import RatingsGrid from './RatingsGrid';

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
            ]
        };
    }

    render() {
        return (
            <div>
                <div className="title">movie</div>
                <RatingsGrid ratings={this.state.ratings} />
            </div>
        );
    }
}

export default MovieView;
