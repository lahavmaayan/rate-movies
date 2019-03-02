import React, { Component } from 'react';
import Loader from '../../common/components/Loader';
import { get } from '../../services/restMethods';

const MovieTitle = ({ movieName, movieYear }) => {
    return (
        <title className="container">
            <p>{movieName}</p>
            <p>{movieYear}</p>
        </title>
    );
};

const MovieCategories = ({ categories }) => {
    return (
        <div className="container">
            <p>Categories:</p>
            {categories.map((category, i) => (
                <p className="element" key={i}>
                    {category}
                    {categories.length - 1 != i && ','}
                </p>
            ))}
        </div>
    );
};

const MovieDescription = ({ description }) => {
    return (
        <div className="container">
            <p>Description:</p>
            <p>{description}</p>
        </div>
    );
};

const MoviePicture = ({ picture }) => {
    return <img src={picture} alt="movie picture" />;
};

const MovieCast = ({ cast }) => {
    return (
        <div className="container">
            <p>Cast:</p>
            {cast.map((castMember, i) => (
                <p className="element" key={i}>
                    {castMember}
                    {cast.length - 1 != i && ','}
                </p>
            ))}
        </div>
    );
};

const MovieDuration = ({ movieDuration }) => {
    return (
        <div className="container">
            <p>Duration:</p>
            <p>{movieDuration}</p>
        </div>
    );
};
class ObjectiveMovieView extends Component {
    componentDidMount() {
        const { setMovie } = this.props;
        const currentMovie = this.props.match.params.movieId;
        get(`/api/movie/${currentMovie}`).then(movie => {
            setMovie(movie);
        });
    }

    render() {
        const { movie } = this.props;
        if (!movie) {
            return <Loader />;
        }

        const {
            name,
            categories,
            description,
            publishingYear,
            pictureUrl,
            cast,
            duration
        } = movie;

        return (
            <div className="objective-movie">
                <MovieTitle movieName={name} movieYear={publishingYear} />
                <MovieCategories categories={categories} />
                <MovieDescription description={description} />
                <MoviePicture picture={pictureUrl} />
                <MovieCast cast={cast} />
                <MovieDuration movieDuration={duration} />
            </div>
        );
    }
}

export default ObjectiveMovieView;
