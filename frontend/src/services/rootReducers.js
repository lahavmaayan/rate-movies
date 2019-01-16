import { combineReducers } from 'redux';
import rateMovieReducer from '../components/rateMovie/rateMovieReducer';
import questionsReducer from './../components/rateMovie/Questions/questionsReducer';
export default combineReducers({
    rateMovie: rateMovieReducer,
    questions: questionsReducer
});
