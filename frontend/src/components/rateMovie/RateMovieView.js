import React, { Component } from 'react';
import _ from 'lodash';

import UserInfoView from './rateMovieSteps/UserInfoView';
import QuestionsView from './rateMovieSteps/QuestionsView';
import RatingsView from './rateMovieSteps/ratingsView';
import WizardForm from './../../common/components/wizardForm';
import { post } from '../../services/restMethods';

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

    handleSubmit = async event => {
        event.preventDefault();
        const {
            reviewerDetails,
            reviewerRating,
            reviewerQuestions
        } = this.props;
        await post('api/movie/5c48796d2e03c420f6a22736/rate', {
            reviewerDetails,
            reviewerRating,
            reviewerQuestions
        });
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
