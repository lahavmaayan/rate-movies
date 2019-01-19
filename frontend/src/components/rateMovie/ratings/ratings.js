import { connect } from 'react-redux';
import RatingsView from './ratingsView';

const mapStateToProps = state => {
    return { reviewerRating: state.ratings.reviewerRating };
};

function mapDispatchToProps(dispatch) {
    return {
        setReviewerRating: payload =>
            dispatch({ type: 'SET_REVIEWER_RATINGS', payload })
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RatingsView);
