import React, { Component } from 'react';
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';

class RatingsView extends Component {
    render() {
        const { reviewerRating, handleChange } = this.props;
        return (
            <div>
                <label>
                    From 1-5 would you rate this movie as:
                    <br />
                    <label>
                        Funny:
                        <Rate
                            defaultValue={2.5}
                            onChange={e => handleChange(e, 'funnyRate')}
                            style={{ fontSize: 40 }}
                            allowHalf
                            allowClear={false}
                            value={reviewerRating.funnyRate}
                        />
                    </label>
                    <br />
                    <label>
                        Feminist:
                        <Rate
                            defaultValue={2.5}
                            onChange={e => handleChange(e, 'feminismRate')}
                            style={{ fontSize: 40 }}
                            allowHalf
                            allowClear={false}
                            value={reviewerRating.feminismRate}
                        />
                    </label>
                    <br />
                    <label>
                        Violence:
                        <Rate
                            defaultValue={2.5}
                            onChange={e => handleChange(e, 'violenceRate')}
                            style={{ fontSize: 40 }}
                            allowHalf
                            allowClear={false}
                            value={reviewerRating.violenceRate}
                        />
                    </label>
                    <br />
                    <label>
                        Sexual:
                        <Rate
                            defaultValue={2.5}
                            onChange={e => handleChange(e, 'sexualityRate')}
                            style={{ fontSize: 40 }}
                            allowHalf
                            allowClear={false}
                            value={reviewerRating.sexualityRate}
                        />
                    </label>
                    <br />
                    <label>
                        Fascinating:
                        <Rate
                            defaultValue={2.5}
                            onChange={e => handleChange(e, 'fascinateRate')}
                            style={{ fontSize: 40 }}
                            allowHalf
                            allowClear={false}
                            value={reviewerRating.fascinateRate}
                        />
                    </label>
                    <br />
                </label>
            </div>
        );
    }
}

export default RatingsView;
