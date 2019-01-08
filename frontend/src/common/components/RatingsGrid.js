import React, { Component } from 'react';
import FeatureRating from './FeatureRating';

class RatingsGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ratings: [
                { feature: 'funny', rating: 4, maxRating: 5 },
                { feature: 'interesting', rating: 3, maxRating: 5 },
                { feature: 'female lead', rating: 3, maxRating: 5 },
                { feature: 'happy ending', rating: 3, maxRating: 5 },
                { feature: 'make you think', rating: 3, maxRating: 5 }
            ]
        };
    }
    render() {
        return (
            <div>
                {this.state.ratings.map(rating => (
                    <FeatureRating
                        key={rating.feature}
                        feature={rating.feature}
                        rating={rating.rating}
                        maxRating={rating.maxRating}
                    />
                ))}
            </div>
        );
    }
}

export default RatingsGrid;
