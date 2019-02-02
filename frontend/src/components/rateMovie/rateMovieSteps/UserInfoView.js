import React, { Component } from 'react';
import Input from 'common/components/Input';
import _ from 'lodash';

class UserInfoView extends Component {
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
                        selectOptions={_.range(18, 121)}
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
