export const LOAD_START = 'LOAD_START';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';

function movieReducer(state = null, action) {
    switch (action.type) {
        case LOAD_SUCCESS:
            return action.payload.movieData;
        case LOAD_START:
            return null;
        default:
            return state;
    }
}

export default movieReducer;
