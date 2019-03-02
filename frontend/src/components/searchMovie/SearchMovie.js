import { connect } from 'react-redux';
import SearchMovieView from './SearchMovieView';
import { SET_QUERY, SET_MOVIES } from './searchMovieConstants';

const mapStateToProps = state => {
    return {
        searchQuery: state.movieSearch.query,
        resultMovies: state.movieSearch.movies
    };
};

function mapDispatchToProps(dispatch) {
    return {
        setQuery: payload => dispatch({ type: SET_QUERY, payload }),
        setMovies: payload => dispatch({ type: SET_MOVIES, payload })
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchMovieView);
