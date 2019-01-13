//import { actionTypes } from 'shared/notifications/notificationsConstants';

const initialState = {
    reviewerDetails: { age: 0, gender: '' }
};

function rateMovieReducer(state = initialState, action) {
    switch (action.type) {
        // case 'SET_MOVIES':
        //     return {
        //         movies: action.payload
        //     };
        case 'SET_REVIEWER_DETAILS':
            return { reviewerDetails: action.payload };
        default:
            return state;
    }
}

export default rateMovieReducer;
