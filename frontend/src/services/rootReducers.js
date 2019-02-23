import { combineReducers } from 'redux';
import movieRateReducer from './../components/rateMovie/movieRateReducer';

import movieReducer from '../components/movie/MovieReducer';
import movieSearchReducer from './../components/searchMovie/movieSearchReducer';
import objectiveMovieReducer from '../components/ObjectiveMovie/reducer';

export default combineReducers({
    movieRate: movieRateReducer,
    currentMovie: movieReducer,
    movieSearch: movieSearchReducer,
    objectiveMovie: objectiveMovieReducer
});
