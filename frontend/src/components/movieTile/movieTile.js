import React, { Component } from 'react';

class MovieTile extends Component {
    constructor(props) {
        super(props);
        this.state = {hovered: false};
    }

    render() {
        const { imageClass, imageHoveredClass } = this.props
        return(
            <div>
                <a href={this.props.movieUrl}>
                    <img width={140} height={209} alt="" src={this.props.pictureUrl}
                    onMouseOut={() => this.setState({hovered: false})}
                    onMouseOver={() => this.setState({hovered: true})}
                    className={this.state.hovered ? imageHoveredClass : imageClass}
                    />
                </a>
            </div>
        );
    }
}

export default MovieTile;