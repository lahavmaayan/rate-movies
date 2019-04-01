import { LOAD_START, LOAD_SUCCESS } from './movieReducer';
import { connect } from 'react-redux';

import MovieView from './MovieView';

function mapDispatchToProps(dispatch) {
    return {
        loadStart: () => dispatch({ type: LOAD_START }),
        loadSucseed: movieData =>
            dispatch({ type: LOAD_SUCCESS, payload: { movieData: movieData } })
    };
}

const mapStateToProps = state => ({
    movie: state.currentMovie.data,
    reviewerDetails: state.currentMovie.currentRate.ratings.reviewerDetails,
    reviewerRating: state.currentMovie.currentRate.ratings.reviewerRating,
    reviewerQuestions: state.currentMovie.currentRate.ratings.reviewerQuestions
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieView);
