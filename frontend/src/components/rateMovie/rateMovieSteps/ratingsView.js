import React, { Component } from "react";
import Rate from "rc-rate";
import "rc-rate/assets/index.css";

class RatingsView extends Component {
  render() {
    const { reviewerRating, handleChange } = this.props;
    return (
      <div className="form-step">
        <label>
          From 1-5 would you rate this movie as:
          <br />
          <label className="answer-lable-rating">
            Strong Female Lead
            <Rate
              defaultValue={2.5}
              onChange={e => handleChange(e, "femaleLead")}
              allowHalf
              allowClear={false}
              value={reviewerRating.femaleLead}
            />
          </label>
          <br />
          <label className="answer-lable-rating">
            LGBTQ
            <Rate
              defaultValue={2.5}
              onChange={e => handleChange(e, "LGBTQ")}
              allowHalf
              allowClear={false}
              value={reviewerRating.LGBTQ}
            />
          </label>
          <br />
          <label className="answer-lable-rating">
            Minority Group Representation
            <Rate
              defaultValue={2.5}
              onChange={e => handleChange(e, "minorityRepresentation")}
              allowHalf
              allowClear={false}
              value={reviewerRating.minorityRepresentation}
            />
          </label>
          <br />
          <label className="answer-lable-rating">
            Sexual Violante
            <Rate
              defaultValue={2.5}
              onChange={e => handleChange(e, "sexualityRate")}
              allowHalf
              allowClear={false}
              value={reviewerRating.sexualityRate}
            />
          </label>
          <br />
        </label>
      </div>
    );
  }
}

export default RatingsView;
