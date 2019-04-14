import React, { Component } from 'react';
import TagsView from './TagsView';
import FMScore from './FMScore';

class MovieDetails extends Component {
    render() {
        const {
            title,
            categories,
            description,
            publishingYear,
            imageUrl,
            tags,
            fmScore
        } = this.props.movie;
        const categoriesArr = categories.map(item => item.name);
        return (
            <div>
                <div className="flex-container">
                    <h1 className="capitalize movieTitle">{title}</h1>
                    <FMScore className="flex-item" value={fmScore} />
                    <TagsView tags={tags} />
                </div>
                <img src={imageUrl} className="moviePic" />
                <p className="boldDetails capitalize">
                    {categoriesArr} | {publishingYear}
                </p>
                <p>{description}</p>
                <div className="clearFloat" />
            </div>
        );
    }
}
export default MovieDetails;
