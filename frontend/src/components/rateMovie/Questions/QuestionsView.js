import React, { Component } from 'react';
import RadioGroup from './../../../common/components/RadioGroup';

class QuestionsView extends Component {
    handleQuestionChanged = ({ target }) => {
        const { reviewerQuestions, setReviewerQuestions } = this.props;
        const questions = { ...reviewerQuestions };
        questions[target.name] = target.value;
        setReviewerQuestions(questions);
    };

    handleSubmit = event => {
        event.preventDefault();
        const { reviewerQuestions } = this.props;
        console.log(reviewerQuestions);
    };

    render() {
        const { reviewerQuestions } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    For how long did you watched the movie?
                    <RadioGroup
                        options={[
                            {
                                label: 'I watched the entire movie',
                                value: 'allMovie'
                            },
                            {
                                label:
                                    'I changed a channel right after the opening',
                                value: 'onOpening'
                            },
                            {
                                label:
                                    'In the middle I realized this movie is not for me',
                                value: 'onMiddle'
                            },
                            {
                                label: 'I fell asleep near the end',
                                value: 'onEnd'
                            }
                        ]}
                        currentPick={reviewerQuestions.movieLong}
                        handlePick={this.handleQuestionChanged}
                        name="movieLong"
                    />
                </label>
                <label>
                    Did the movie contained a women as role lead?
                    <RadioGroup
                        options={[
                            { label: 'Yes', value: true },
                            { label: 'No', value: false }
                        ]}
                        currentPick={reviewerQuestions.movieLong}
                        handlePick={this.handleQuestionChanged}
                        name="womenLeadRole.isTrue"
                    />
                </label>

                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default QuestionsView;
