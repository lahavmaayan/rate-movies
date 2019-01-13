import React, { Component } from 'react';

class UserInfoView extends Component {
    handleChange = e => {
        console.log(e.target.name);
        const { setReviewerDetails, reviewerDetails } = this.props;
        const details = { ...reviewerDetails };
        details[e.target.name] = e.target.value;
        setReviewerDetails(details);
    };

    handleSubmit = e => {
        event.preventDefault();
        const { reviewerDetails } = this.props;
        console.log(reviewerDetails);
    };

    render() {
        const { reviewerDetails } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    age:
                    <input
                        type="text"
                        name="age"
                        value={reviewerDetails.age}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    gender:
                    <input
                        type="text"
                        name="gender"
                        value={reviewerDetails.gender}
                        onChange={this.handleChange}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default UserInfoView;
