import React, { Component } from 'react';
import purpleStar from 'resources/images/star.png';

class FMScore extends Component {
    render() {
        return (
            <div className={'flex-container h2 ' + this.props.className}>
                <span>{this.props.value}</span>
                <img src={purpleStar} className="icon" />
            </div>
        );
    }
}
export default FMScore;
