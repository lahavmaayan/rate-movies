import React, { Component } from 'react';

class UserInfoView extends Component {
    componentDidMount() {
        console.log('fff' + JSON.stringify(this.props));
        //  const { setMovies } = this.props;
        // setMovies(res);
    }
    handleChange({ currentTarget: input }) {
        console.log(JSON.stringify(this.props));

        const details = { ...reviewerDetails };
        details[input.name] = input.value;
        setReviewerDetails(details);
    }

    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        const { setReviewerDetails, reviewerDetails } = this.props;
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
