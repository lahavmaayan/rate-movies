const initialState = {
    reviewerQuestions: {
        movieLong: '',
        womenLeadRole: { isTrue: false, ifTrueCharacter: '' }
    }
};

function questionsReducer(state = initialState, action) {
    switch (action.type) {
        // case 'SET_MOVIES':
        //     return {
        //         movies: action.payload
        //     };
        case 'SET_REVIEWER_QUESTIONS':
            return { reviewerQuestions: action.payload };
        default:
            return state;
    }
}

export default questionsReducer;
