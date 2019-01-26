export const SET_MOVIE = 'SET_MOVIE';
export const setMovie = movie => {
    return {
        type: SET_MOVIE,
        payload: movie
    };
};
