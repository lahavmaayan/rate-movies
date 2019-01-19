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

        let props = target.name.split('.');
        questions[target.name] = target.value;
        setReviewerQuestions(questions);
    };

    handelNext = () => {
        event.preventDefault();
        const maxSteps = 3;
        const { currentStep, setCurrentStep } = this.props;
        if (currentStep < maxSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    handelPrevious = () => {
        event.preventDefault();
        const { currentStep, setCurrentStep } = this.props;
        let step = currentStep;
        if (step !== 1) {
            setCurrentStep(currentStep - 1);
        }
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
        const maxSteps = 3;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="title">rate-movie</div>
                    {currentStep === 1 && (
                        <UserInfoView
                            reviewerDetails={reviewerDetails}
                            handleChange={this.handleUserInfoChange}
                        />
                    )}
                    {currentStep === 2 && (
                        <RatingsView
                            handleChange={this.handleRatingsChanged}
                            reviewerRating={reviewerRating}
                        />
                    )}
                    {currentStep === 3 && (
                        <QuestionsView
                            handleChange={this.handleQuestionChanged}
                            reviewerQuestions={reviewerQuestions}
                        />
                    )}
                    {currentStep === 4 && <UserInfo />}
                    {currentStep > 1 && (
                        <button onClick={this.handelPrevious}>prev</button>
                    )}
                    {currentStep < maxSteps && (
                        <button onClick={this.handelNext}>next</button>
                    )}

                    {currentStep === maxSteps && (
                        <input type="submit" value="Submit" />
                    )}
                </form>
            </div>
        );
    }
}

export default RateMovieView;
