import React, { Component } from 'react';
import UserInfoView from './UserInfoView';

class RateMovieView extends Component {
    componentDidMount() {
        console.log('ggg' + JSON.stringify(this.props));
        //  const { setMovies } = this.props;
        // setMovies(res);
    }

    render() {
        const { currentStep } = this.props;
        return (
            <div>
                <div className="section loader">
                    <div className="title">rate-movie</div>
                    {1 === 1 && <UserInfoView />}
                    {currentStep === 2 && <UserInfoView />}
                    {currentStep === 3 && <UserInfoView />}
                    {currentStep === 4 && <UserInfoView />}
                    <button>next</button>
                    <button>prev</button>
                </div>
            </div>
        );
    }
}

export default RateMovieView;
