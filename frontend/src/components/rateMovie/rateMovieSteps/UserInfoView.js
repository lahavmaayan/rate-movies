import React, { Component } from 'react';
import Input from 'common/components/Input';

class UserInfoView extends Component {
    // handleChange = ({ target }) => {
    //     const { setReviewerDetails, reviewerDetails } = this.props;
    //     const details = { ...reviewerDetails };
    //     details[target.name] = target.value;
    //     setReviewerDetails(details);
    // };

    // handleSubmit = event => {
    //     event.preventDefault();
    //     const { reviewerDetails } = this.props;
    //     console.log(reviewerDetails);
    // };

    initAge = (start, end) => {
        return Array.apply(null, {
            length: end - start + 1
        }).map((item, index) => start + index);
    };

    render() {
        const { reviewerDetails, handleChange } = this.props;
        return (
            <div>
                <label>
                    age:
                    <Input
                        label="age"
                        isRequired={true}
                        type="select"
                        name="age"
                        value={reviewerDetails['age']}
                        selectOptions={this.initAge(18, 120)}
                        selectFirst={false}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    gender:
                    <Input
                        isRequired={true}
                        type="select"
                        name="gender"
                        selectOptions={['FEMALE', 'MALE', 'OTHER']}
                        value={reviewerDetails['gender']}
                        selectFirst={false}
                        onChange={handleChange}
                    />
                </label>
            </div>
        );
    }
}

export default UserInfoView;
