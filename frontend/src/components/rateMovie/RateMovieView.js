import React, { Component } from 'react';
import UserInfo from './UserInfo';

class RateMovieView extends Component {
    componentDidMount() {
        const res = api.mcccjcj();
        const { setMovies } = this.props;
        setMovies(res);
    }

    render() {
        const { currentStep } = this.props;
        return (
            <div>
                <div className="section loader">
                    <div className="title">rate-movie</div>
                    {currentStep === 1 && <UserInfo />}
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
