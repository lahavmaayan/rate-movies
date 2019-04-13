import React, { Component } from 'react';
import GridTileBar from './../../common/components/GridTileBar';
class MovieTile extends Component {
    constructor(props) {
        super(props);
        this.state = { hovered: false };
    }

    render() {
        const {
            imageClass,
            imageHoveredClass,
            title,
            fmScore,
            onClick
        } = this.props;
        return (
            <div className="movie-tile" onClick={onClick}>
                <a>
                    <img
                        width={140}
                        height={209}
                        alt=""
                        src={this.props.pictureUrl}
                        onMouseOut={() => this.setState({ hovered: false })}
                        onMouseOver={() => this.setState({ hovered: true })}
                        className={
                            this.state.hovered ? imageHoveredClass : imageClass
                        }
                    />
                </a>
                <GridTileBar title={title} data={fmScore} />
            </div>
        );
    }
}

export default MovieTile;
