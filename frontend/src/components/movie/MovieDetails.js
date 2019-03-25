import React, { Component } from 'react';
import TagsView from './TagsView';

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
                <div className="flex-container">
                    <h1 className="capitalize movieTitle">{name}</h1>
                    <TagsView tags={['female lead', 'LGBTQ']} />
                </div>
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
