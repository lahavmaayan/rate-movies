import { combineReducers } from 'redux';

import movieRateReducer from './../components/rateMovie/movieRateReducer';
import movieReducer from '../components/movie/MovieReducer';
export default combineReducers({
    movieRate: movieRateReducer,
    currentMovie: movieReducer
});
