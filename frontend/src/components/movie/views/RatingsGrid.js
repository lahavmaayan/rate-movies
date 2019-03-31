import React, { Component } from 'react';
import FeatureRating from './FeatureRating';

class RatingsGrid extends Component {
    render() {
        return (
            <div className="grid-container">
                {this.props.ratings.map((rating, index) => (
                    <FeatureRating
                        key={index}
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
