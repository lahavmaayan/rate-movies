import { connect } from 'react-redux';
import QuestionsView from '../Questions/QuestionsView';

const mapStateToProps = state => {
    return { reviewerQuestions: state.questions.reviewerQuestions };
};

function mapDispatchToProps(dispatch) {
    return {
        setReviewerDetails: payload =>
            dispatch({ type: 'SET_REVIEWER_QUESTIONS', payload })
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionsView);
