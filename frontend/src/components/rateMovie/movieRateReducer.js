const initialState = {
    currentStep: 1,
    ratings: {
        reviewerDetails: { age: 18, gender: 'FEMALE' },
        reviewerQuestions: {
            movieLong: 'allMovie',
            womenLeadRole: { isTrue: 'false', ifTrueCharacterName: '' }
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
        case 'rateMovie/SET_REVIEWER_DETAILS':
            return {
                ...state,
                ratings: {
                    ...state.ratings,
                    reviewerDetails: action.payload
                }
            };
        case 'rateMovie/SET_REVIEWER_RATINGS':
            return {
                ...state,
                ratings: {
                    ...state.ratings,
                    reviewerRating: action.payload
                }
            };
        case 'rateMovie/SET_REVIEWER_QUESTIONS':
            return {
                ...state,
                ratings: {
                    ...state.ratings,
                    reviewerQuestions: action.payload
                }
            };
        case 'rateMovie/SET_CURRENT_STEP':
            return { ...state, currentStep: action.payload };

        default:
            return state;
    }
}

export default movieRateReducer;
