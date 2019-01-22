import React, { Component } from 'react';
import UserInfoView from './rateMovieSteps/UserInfoView';
import QuestionsView from './rateMovieSteps/QuestionsView';
import RatingsView from './rateMovieSteps/ratingsView';
import WizardForm from './../../common/components/wizardForm';
import _ from 'lodash';

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
        let questions = { ...reviewerQuestions };
        _.set(questions, target.name, target.value);

        setReviewerQuestions(questions);
    };

    handleSubmit = event => {
        event.preventDefault();
        const { overallRating } = this.props;
        console.log(JSON.stringify(overallRating));
    };
    render() {
        const {
            currentStep,
            reviewerDetails,
            reviewerRating,
            reviewerQuestions,
            setCurrentStep
        } = this.props;
        const steps = [
            {
                name: 'UserInfoView',
                component: (
                    <UserInfoView
                        reviewerDetails={reviewerDetails}
                        handleChange={this.handleUserInfoChange}
                    />
                )
            },
            {
                name: 'QuestionsView',
                component: (
                    <QuestionsView
                        handleChange={this.handleQuestionChanged}
                        reviewerQuestions={reviewerQuestions}
                    />
                )
            },
            {
                name: 'RatingsView',
                component: (
                    <RatingsView
                        handleChange={this.handleRatingsChanged}
                        reviewerRating={reviewerRating}
                    />
                )
            }
        ];

        return (
            <div>
                <WizardForm
                    currentStep={currentStep}
                    steps={steps}
                    onSubmit={this.handleSubmit}
                    onStepChanged={setCurrentStep}
                />
            </div>
        );
    }
}

export default RateMovieView;
