import UserInfoView from '../UserInfoView';

const mapStateToProps = state => {
    console.log('mapStateToProps' + JSON.stringify(state));
    return { reviewerDetails: state.reviewerDetails };
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
