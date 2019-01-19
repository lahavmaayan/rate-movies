import React, { Component } from 'react';
import UserInfoView from './rateMovieSteps/UserInfoView';
import QuestionsView from './rateMovieSteps/QuestionsView';
import RatingsView from './rateMovieSteps/ratingsView';

class RateMovieView extends Component {
    handleUserInfoChange = ({ target }) => {
        const { setReviewerDetails, reviewerDetails } = this.props;
        const details = { ...reviewerDetails };
        details[target.name] = target.value;
        setReviewerDetails(details);
    };

    handleRatingsChanged = (event, propName) => {
        const { reviewerRating, setReviewerRating } = this.props;
        const ratings = { ...reviewerRating };

        ratings[propName] = event;
        setReviewerRating(ratings);
    };
    handleQuestionChanged = ({ target }) => {
        const { reviewerQuestions, setReviewerQuestions } = this.props;
        const questions = { ...reviewerQuestions };

        //let props = target.name.split('.');
        questions[target.name] = target.value;
        setReviewerQuestions(questions);
    };

    handleSubmit = event => {
        event.preventDefault();
        const { overallRating } = this.props;
        console.log(overallRating);
    };
    render() {
        const {
            currentStep,
            reviewerDetails,
            reviewerRating,
            reviewerQuestions
        } = this.props;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="title">rate-movie</div>
                    {2 === 1 && (
                        <UserInfoView
                            reviewerDetails={reviewerDetails}
                            handleChange={this.handleUserInfoChange}
                        />
                    )}
                    {21 === 2 && (
                        <RatingsView
                            handleChange={this.handleRatingsChanged}
                            reviewerRating={reviewerRating}
                        />
                    )}
                    {3 === 3 && (
                        <QuestionsView
                            handleChange={this.handleQuestionChanged}
                            reviewerQuestions={reviewerQuestions}
                        />
                    )}
                    {currentStep === 4 && <UserInfo />}
                    <button>next</button>
                    <button>prev</button>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default RateMovieView;
