const initialState = {
    name: '',
    ratings: []
};
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

function movieReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_SUCCESS:
            return action.payload.movieData;
        default:
            return state;
    }
}

export default movieReducer;
