import React, { Component } from 'react';
import UserInfo from './rateSteps/UserInfo';
import Questions from './Questions/Questions';

class RateMovieView extends Component {
    render() {
        const { currentStep } = this.props;
        return (
            <div>
                <div className="section loader">
                    <div className="title">rate-movie</div>
                    {1 === 1 && <UserInfo />}
                    {currentStep === 2 && <UserInfo />}
                    {currentStep === 3 && <UserInfo />}
                    {currentStep === 4 && <UserInfo />}
                    <button>next</button>
                    <button>prev</button>
                </div>
            </div>
        );
    }
}

export default RateMovieView;
