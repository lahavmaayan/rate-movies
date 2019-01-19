import { combineReducers } from 'redux';
import rateMovieReducer from '../components/rateMovie/rateMovieReducer';
import questionsReducer from './../components/rateMovie/Questions/questionsReducer';
import ratingsReducer from './../components/rateMovie/ratings/ratingsReducer';
export default combineReducers({
    rateMovie: rateMovieReducer,
    questions: questionsReducer,
    ratings: ratingsReducer
});
