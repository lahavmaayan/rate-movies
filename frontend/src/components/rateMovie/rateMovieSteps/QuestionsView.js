import React, { Component } from 'react';
import RadioGroup from '../../../common/components/RadioGroup';
import Input from 'common/components/Input';
import PropTypes from 'prop-types';

class QuestionsView extends Component {
    render() {
        const { reviewerQuestions, handleChange } = this.props;
        return (
            <div>
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
                        handlePick={handleChange}
                        name="movieLong"
                    />
                </label>
                <label>
                    Did the movie contained a women as role lead?
                    <RadioGroup
                        options={[
                            { label: 'Yes', value: 'true' },
                            { label: 'No', value: 'false' }
                        ]}
                        currentPick={reviewerQuestions.womenLeadRole.isTrue}
                        handlePick={handleChange}
                        name="womenLeadRole.isTrue"
                    />
                </label>
                {reviewerQuestions.womenLeadRole.isTrue === 'true' && (
                    <label>
                        What is the Character Name?
                        <Input
                            label="CharacterName"
                            type="text"
                            name="womenLeadRole.ifTrueCharacterName"
                            value={
                                reviewerQuestions.womenLeadRole
                                    .ifTrueCharacterName
                            }
                            onChange={handleChange}
                        />
                    </label>
                )}
            </div>
        );
    }
}

QuestionsView.propTypes = {
    currentPick: PropTypes.bool
};
export default QuestionsView;
