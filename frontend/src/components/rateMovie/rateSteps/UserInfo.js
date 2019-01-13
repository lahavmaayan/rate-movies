import { connect } from 'react-redux';
import UserInfoView from '../UserInfoView';

const mapStateToProps = state => {
    console.log('mapStateToProps', state);
    return { reviewerDetails: state.rateMovieReducer.reviewerDetails };
};

function mapDispatchToProps(dispatch) {
    return {
        setReviewerDetails: payload =>
            dispatch({ type: 'SET_REVIEWER_DETAILS', payload })
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserInfoView);
