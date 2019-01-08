import React, { Component } from 'react';

class FeatureRating extends Component {
    render() {
        return (
            <div>
                <span>{this.props.feature}</span>
                <span> </span>
                <span>{this.props.rating}</span>
                <span>/</span>
                <span>{this.props.maxRating}</span>
            </div>
        );
    }
}
export default FeatureRating;
