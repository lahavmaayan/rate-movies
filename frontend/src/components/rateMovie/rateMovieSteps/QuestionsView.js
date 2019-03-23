import React, { Component } from "react";
import RadioGroup from "common/components/RadioGroup";
import PropTypes from "prop-types";

class QuestionsView extends Component {
  render() {
    const { reviewerQuestions, handleChange } = this.props;
    return (
      <div className="form-step">
        <label className="question-label">
          For how long did you watched the movie?
          <RadioGroup
            options={[
              {
                label: "I watched the entire movie",
                value: "allMovie"
              },
              {
                label: "I changed a channel right after the opening",
                value: "onOpening"
              },
              {
                label: "In the middle I realized this movie is not for me",
                value: "onMiddle"
              },
              {
                label: "I fell asleep near the end",
                value: "onEnd"
              }
            ]}
            currentPick={reviewerQuestions.movieLong}
            handlePick={handleChange}
            name="movieLong"
            className="answer-lable"
          />
        </label>
        <label className="question-label">
          Bechdel test - did the movie contained a scene of at least two women
          who talk to each other about something other than a man ?
          <RadioGroup
            options={[
              { label: "Yes", value: "true" },
              { label: "No", value: "false" }
            ]}
            currentPick={reviewerQuestions.bechdelTest}
            handlePick={handleChange}
            name="bechdelTest"
            className="answer-lable"
          />
        </label>
      </div>
    );
  }
}

QuestionsView.propTypes = {
  currentPick: PropTypes.bool
};
export default QuestionsView;
