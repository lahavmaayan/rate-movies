const initialState = {
    reviewerRating: {
        funnyRate: 0,
        feminismRate: 0,
        violenceRate: 0,
        sexualityRate: 0,
        fascinateRate: 0
    }
};

function ratingsReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_REVIEWER_RATINGS':
            return { reviewerRating: action.payload };
        default:
            return state;
    }
}

export default ratingsReducer;
