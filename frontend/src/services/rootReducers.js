import { combineReducers } from 'redux';
import movieRateReducer from 'components/movie/rateMovie/movieRateReducer';
import movieReducer from 'components/movie/movieReducer';
import movieSearchReducer from 'components/searchMovie/movieSearchReducer';

export default combineReducers({
    currentMovie: combineReducers({
        data: movieReducer,
        currentRate: movieRateReducer
    }),
    movieSearch: movieSearchReducer
});
