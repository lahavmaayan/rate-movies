import { SET_QUERY, SET_MOVIES } from './searchMovieConstants';

const initialState = {
    query: '',
    movies: []
};

function movieSearchReducer(state = initialState, action) {
    switch (action.type) {
        case SET_QUERY:
            return {
                ...state,
                query: action.payload
            };
        case SET_MOVIES:
            return {
                ...state,
                movies: action.payload
            };
        default:
            return state;
    }
}

export default movieSearchReducer;
