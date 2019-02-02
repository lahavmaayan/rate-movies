const emptyState = {
    name: '',
    ratings: []
};
export const LOAD_START = 'LOAD_START';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';

function movieReducer(state = emptyState, action) {
    switch (action.type) {
        case LOAD_SUCCESS:
            return action.payload.movieData;
        case LOAD_START:
            return emptyState;
        default:
            return state;
    }
}

export default movieReducer;
