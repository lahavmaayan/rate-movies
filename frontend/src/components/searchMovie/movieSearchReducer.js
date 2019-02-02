const initialState = {
    query: "",
    movies: []
};

function movieSearchReducer(state = initialState, action) {
    switch (action.type) {
        case 'searchMovie/SET_QUERY':
            return {
                ...state,
                query: action.payload
            };
        case 'searchMovie/SET_MOVIES':
            return {
                ...state,
                movies: action.payload
            };
        default:
            return state;
    }
}

export default movieSearchReducer;