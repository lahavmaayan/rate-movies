import { combineReducers } from 'redux';

import movieRateReducer from './../components/rateMovie/movieRateReducer';
export default combineReducers({
    movieRate: movieRateReducer
});
