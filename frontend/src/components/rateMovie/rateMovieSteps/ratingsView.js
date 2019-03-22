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
          <label className="rate-lable">
            Strong Female Lead
            <Rate
              defaultValue={2.5}
              onChange={e => handleChange(e, "femaleLead")}
              style={{ fontSize: 30 }}
              allowHalf
              allowClear={false}
              value={reviewerRating.femaleLead}
            />
          </label>
          <br />
          <label className="rate-lable">
            LGBTQ
            <Rate
              defaultValue={2.5}
              onChange={e => handleChange(e, "LGBTQ")}
              style={{ fontSize: 30 }}
              allowHalf
              allowClear={false}
              value={reviewerRating.LGBTQ}
            />
          </label>
          <br />
          <label className="rate-lable">
            Minority Group Representation
            <Rate
              defaultValue={2.5}
              onChange={e => handleChange(e, "minorityRepresentation")}
              style={{ fontSize: 30 }}
              allowHalf
              allowClear={false}
              value={reviewerRating.minorityRepresentation}
            />
          </label>
          <br />
          <label className="rate-lable">
            Sexual Violante
            <Rate
              defaultValue={2.5}
              onChange={e => handleChange(e, "sexualityRate")}
              style={{ fontSize: 30 }}
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
