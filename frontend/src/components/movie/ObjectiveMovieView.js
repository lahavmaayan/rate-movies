import React, { Component } from 'react';
import { get } from '../../services/restMethods';

const MovieTitle = ({ movieName, movieYear }) => {
    return (
        <title className="container">
            <p>{movieName}</p>
            <p>{movieYear}</p>
        </title>
    );
};

const MovieCategory = ({ category }) => {
    return (
        <div className="container">
            <p>Category:</p>
            <p>{category}</p>
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
                <p className="castMember" key={i}>
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
    constructor(props) {
        super(props);
        this.state = { movie: null };
    }

    componentDidMount() {
        // const currentMovie = this.props.match.params.movieId;
        const currentMovie = '5c38aaf152bd0dfef25778d8';
        get(`/api/movie/${currentMovie}`).then(movie => {
            this.setState({
                movie
            });
        });
    }

    render() {
        const { movie } = this.state;
        const movieName = movie ? movie.name : 'movie name';
        const movieYear = '2018';
        const category = 'Drama';
        const description = 'This will be the movie description';
        const picture =
            'https://www.949powerfm.com.au/images/harry_potter-2.jpg';
        const cast = ['director', 'actor'];
        const movieDuration = '180 minutes';

        return (
            <div className="objective-movie">
                <MovieTitle movieName={movieName} movieYear={movieYear} />
                <MovieCategory category={category} />
                <MovieDescription description={description} />
                <MoviePicture picture={picture} />
                <MovieCast cast={cast} />
                <MovieDuration movieDuration={movieDuration} />
            </div>
        );
    }
}

export default ObjectiveMovieView;
