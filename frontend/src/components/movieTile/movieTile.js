import React, { Component } from "react";
import GridTileBar from "./../../common/components/GridTileBar";
class MovieTile extends Component {
  constructor(props) {
    super(props);
    this.state = { hovered: false };
  }

  render() {
    const { imageClass, imageHoveredClass, title, rating } = this.props;
    return (
      <div className="movie-tile">
        <a href={this.props.movieUrl}>
          <img
            width={140}
            height={209}
            alt=""
            src={this.props.imageUrl}
            onMouseOut={() => this.setState({ hovered: false })}
            onMouseOver={() => this.setState({ hovered: true })}
            className={this.state.hovered ? imageHoveredClass : imageClass}
          />
        </a>
        <GridTileBar title={title} data={"rating: " + rating} />
      </div>
    );
  }
}

export default MovieTile;
