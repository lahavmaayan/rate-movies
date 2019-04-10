import React, { Component } from 'react';
import TagsView from './TagsView';

class MovieDetails extends Component {
    render() {
        const {
            title,
            categories,
            description,
            publishingYear,
            imageUrl,
            cast,
            duration,
            tags
        } = this.props.movie;
        return (
            <div>
                <div className="flex-container">
                    <h1 className="capitalize movieTitle">{title}</h1>
                    <TagsView tags={tags} />
                </div>
                <img src={imageUrl} className="moviePic" />
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
