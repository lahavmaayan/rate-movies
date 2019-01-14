import React, { Component } from 'react';
import { capitalizeFirstLetter } from '../../common/utils/capitalizeFirstLetter';

class FeatureRating extends Component {
    render() {
        return (
            <div className="container">
                <span className="right-spaced">
                    {capitalizeFirstLetter(this.props.feature)}
                </span>
                <span className="right-aligned">
                    <span className="rating">
                        {this.props.rating.toFixed(1)}
                    </span>
                    <span className="max-rating">/</span>
                    <span className="max-rating">{this.props.maxRating}</span>
                </span>
            </div>
        );
    }
}
export default FeatureRating;
