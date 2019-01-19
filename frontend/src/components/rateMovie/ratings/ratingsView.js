import React, { Component } from 'react';
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';

class RatingsView extends Component {
    handleRatingsChanged = (event, propName) => {
        const { reviewerRating, setReviewerRating } = this.props;
        const ratings = { ...reviewerRating };
        ratings[propName] = event;
        setReviewerRating(ratings);
    };

    handleSubmit = event => {
        event.preventDefault();
        const { reviewerRating } = this.props;
        console.log(reviewerRating);
    };

    render() {
        const { reviewerRating } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    From 1-5 would you rate this movie as:
                    <br />
                    <label>
                        Funny:
                        <Rate
                            defaultValue={2.5}
                            onChange={e =>
                                this.handleRatingsChanged(e, 'funnyRate')
                            }
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
                            onChange={e =>
                                this.handleRatingsChanged(e, 'feminismRate')
                            }
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
                            onChange={e =>
                                this.handleRatingsChanged(e, 'violenceRate')
                            }
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
                            onChange={e =>
                                this.handleRatingsChanged(e, 'sexualityRate')
                            }
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
                            onChange={e =>
                                this.handleRatingsChanged(e, 'fascinateRate')
                            }
                            style={{ fontSize: 40 }}
                            allowHalf
                            allowClear={false}
                            value={reviewerRating.fascinateRate}
                        />
                    </label>
                    <br />
                </label>

                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default RatingsView;
