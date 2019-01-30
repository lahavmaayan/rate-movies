const initialState = {
    name: '',
    ratings: []
};
const FETCH_SUCCESS = 'FETCH_SUCCESS';

function tmpConvertMovieData(serverMovieData) {
    let ratings = [];
    for (var prop in serverMovieData.tags) {
        if (prop == '_id') continue;
        ratings.push({
            feature: prop,
            rating: serverMovieData.tags[prop].avg,
            maxRating: 5
        });
    }
    return {
        name: serverMovieData.name,
        ratings: ratings
    };
}

function movieReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_SUCCESS:
            return action.payload.movieData;
        default:
            return state;
    }
}

export function getLoadFunc() {
    return async dispatch => {
        try {
            const movieData = await load();
            dispatch({
                type: FETCH_SUCCESS,
                payload: { movieData: movieData }
            });
        } catch (err) {
            console.error(err);
        }
    };
}

async function load() {
    const movieId = '5c4c39eb7555a317d4f816bf'; //tmp until recieved from outside
    const resp = await fetch('api/movie/' + movieId);
    handleErrors(resp);
    const movieDataServer = await resp.json();
    return tmpConvertMovieData(movieDataServer);
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
}

export default movieReducer;
