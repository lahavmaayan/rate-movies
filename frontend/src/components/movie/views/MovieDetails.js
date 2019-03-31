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
                <h1 className="capitalize">{name}</h1>
                <img src={pictureUrl} className="moviePic" />
                <p className="boldDetails capitalize">
                    {categories} | {publishingYear} | {duration}
                </p>
                <p>{description}</p>
                <p className="capitalize">Cast: {cast.join(', ')}</p>
                <div className="clearFloat" />
            </div>
        );
    }
}
export default MovieDetails;
