const initialState = {
    currentStep: 1,
    ratings: {
        reviewerDetails: { age: 0, gender: '' },
        reviewerQuestions: {
            movieLong: '',
            womenLeadRole: { isTrue: false, ifTrueCharacterName: '' }
        },
        reviewerRating: {
            funnyRate: 0,
            feminismRate: 0,
            violenceRate: 0,
            sexualityRate: 0,
            fascinateRate: 0
        }
    }
};

function movieRateReducer(state = initialState, action) {
    switch (action.type) {
        // case 'SET_MOVIES':
        //     return {
        //         movies: action.payload
        //     };
        case 'SET_REVIEWER_DETAILS':
            return {
                ...state,
                ratings: {
                    reviewerDetails: action.payload
                }
            };
        case 'SET_REVIEWER_RATINGS':
            return {
                ...state,
                ratings: {
                    reviewerRating: action.payload
                }
            };
        case 'SET_REVIEWER_QUESTIONS':
            return {
                ...state,
                ratings: {
                    reviewerQuestions: action.payload
                }
            };
        case 'SET_CURRENT_STEP':
            return { currentStep: action.payload };

        default:
            return state;
    }
}

export default movieRateReducer;
