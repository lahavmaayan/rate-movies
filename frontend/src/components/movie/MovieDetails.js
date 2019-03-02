import React, { Component } from 'react';
class MovieDetails extends Component {
    render() {
        const {
            name,
            categories,
            description,
            publishingYear,
            pictureUrl,
            cast,
            duration
        } = this.props.movie;
        return (
            <div>
                <h1>{name}</h1>
                <img src={pictureUrl} className="movie-pic" />
                <p>
                    {categories} | {publishingYear} | {duration}
                </p>
                <p>{description}</p>
                <p>Cast: {cast}</p>
                <div className="clearFloat" />
            </div>
        );
    }
}
export default MovieDetails;
