import { connect } from 'react-redux';
import RateMovieView from './RateMovieView';
import {
    SET_REVIEWER_DETAILS,
    SET_REVIEWER_QUESTIONS,
    SET_REVIEWER_RATINGS,
    SET_CURRENT_STEP
} from './rateMovieConstants';

const mapStateToProps = state => {
    return {
        reviewerDetails: state.movieRate.ratings.reviewerDetails,
        reviewerRating: state.movieRate.ratings.reviewerRating,
        reviewerQuestions: state.movieRate.ratings.reviewerQuestions,
        currentStep: state.movieRate.currentStep,
        overallRating: state.movieRate
    };
};

function mapDispatchToProps(dispatch) {
    return {
        setReviewerDetails: payload =>
            dispatch({ type: SET_REVIEWER_DETAILS, payload }),
        setReviewerRating: payload =>
            dispatch({ type: SET_REVIEWER_RATINGS, payload }),
        setReviewerQuestions: payload =>
            dispatch({ type: SET_REVIEWER_QUESTIONS, payload }),
        setCurrentStep: payload => dispatch({ type: SET_CURRENT_STEP, payload })
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RateMovieView);
