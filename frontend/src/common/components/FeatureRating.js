import React, { Component } from 'react';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';

class FeatureRating extends Component {
    render() {
        return (
            <div>
                <span>{capitalizeFirstLetter(this.props.feature)}</span>
                <span> </span>
                <span>{this.props.rating.toFixed(1)}</span>
                <span>/</span>
                <span>{this.props.maxRating}</span>
            </div>
        );
    }
}
export default FeatureRating;
