import React, { Component } from 'react';
import RadioGroup from './../../../common/components/RadioGroup';

class QuestionsView extends Component {
    handleChange = ({ target }) => {
        const { setReviewerDetails, reviewerDetails } = this.props;
        const details = { ...reviewerDetails };
        details[target.name] = target.value;
        setReviewerDetails(details);
    };

    handleSubmit = event => {
        event.preventDefault();
        const { reviewerDetails } = this.props;
        console.log(reviewerDetails);
    };

    initAge = (start, end) => {
        return Array.apply(null, {
            length: end - start + 1
        }).map((item, index) => start + index);
    };

    render() {
        const { reviewerQuestions } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    For how long did you watched the movie?
                    <RadioGroup
                        options={[
                            { label: 'A', value: 'a' },
                            { label: 'B', value: 'b' },
                            { label: 'C', value: 'c' }
                        ]}
                    />
                </label>

                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default QuestionsView;
