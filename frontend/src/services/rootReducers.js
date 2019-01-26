import { combineReducers } from 'redux';
import movieRateReducer from './../components/rateMovie/movieRateReducer';
import objectiveMovieReducer from '../components/ObjectiveMovie/reducer';

export default combineReducers({
    movieRate: movieRateReducer,
    objectiveMovie: objectiveMovieReducer,
});
