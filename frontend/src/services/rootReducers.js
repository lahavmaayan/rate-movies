import { combineReducers } from 'redux';

import movieRateReducer from './../components/rateMovie/movieRateReducer';
import movieSearchReducer from './../components/searchMovie/movieSearchReducer';

export default combineReducers({
    movieRate: movieRateReducer,
    movieSearch: movieSearchReducer

});
    