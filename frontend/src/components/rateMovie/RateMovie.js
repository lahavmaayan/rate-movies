import RateMovieView from './RateMovieView';

const mapStateToProps = state => {
    return {
        movies: state.movies
    };
};

function mapDispatchToProps(dispatch) {
    return {
        setMovies: payload => dispatch({ type: 'SET_MOVIES', payload })
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RateMovieView);
