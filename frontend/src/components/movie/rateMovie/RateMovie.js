import { connect } from 'react-redux';
import RateMovieView from './RateMovieView';
import {
    SET_REVIEWER_DETAILS,
    SET_REVIEWER_QUESTIONS,
    SET_REVIEWER_RATINGS,
    SET_CURRENT_STEP,
    INIT_RATE
} from './rateMovieConstants';

const mapStateToProps = state => {
    return {
        reviewerDetails: state.currentMovie.currentRate.ratings.reviewerDetails,
        reviewerRating: state.currentMovie.currentRate.ratings.reviewerRating,
        reviewerQuestions:
            state.currentMovie.currentRate.ratings.reviewerQuestions,
        currentStep: state.currentMovie.currentRate.currentStep,
        overallRating: state.currentMovie.currentRate
    };
};

function mapDispatchToProps(dispatch) {
    return {
        initializeRate: () => dispatch({ type: INIT_RATE}),
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
