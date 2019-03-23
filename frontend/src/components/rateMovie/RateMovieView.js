import React, { Component } from "react";
import _ from "lodash";

import UserInfoView from "./rateMovieSteps/UserInfoView";
import QuestionsView from "./rateMovieSteps/QuestionsView";
import RatingsView from "./rateMovieSteps/ratingsView";
import SuccessSubmitView from "./rateMovieSteps/SuccessSubmitView";
import WizardForm from "common/components/WizardForm";
import { post } from "services/restMethods";

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

  handleSubmit = async e => {
    e.preventDefault();
    const { reviewerDetails, reviewerRating, reviewerQuestions } = this.props;
    await post("/api/movie/5c8f8c1e63fd20361a158c81/rate", {
      reviewerDetails,
      reviewerRating,
      reviewerQuestions
    });

    const { setCurrentStep, currentStep } = this.props;
    setCurrentStep(currentStep + 1);
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
        name: "UserInfoView",
        component: (
          <UserInfoView
            reviewerDetails={reviewerDetails}
            handleChange={this.handleUserInfoChange}
          />
        )
      },
      {
        name: "QuestionsView",
        component: (
          <QuestionsView
            handleChange={this.handleQuestionChanged}
            reviewerQuestions={reviewerQuestions}
          />
        )
      },
      {
        name: "RatingsView",
        component: (
          <RatingsView
            handleChange={this.handleRatingsChanged}
            reviewerRating={reviewerRating}
          />
        )
      },
      {
        name: "SuccessSubmitView",
        component: (
          <SuccessSubmitView
          />
        )
      },

    ];

    return (
      <div className="rate-movie">
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
