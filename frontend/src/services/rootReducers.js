import { combineReducers } from 'redux';
import questionsReducer from './../components/rateMovie/Questions/questionsReducer';
import ratingsReducer from './../components/rateMovie/ratings/ratingsReducer';
import userInfoReducer from './../components/rateMovie/userInfo/userInfoReducer';
export default combineReducers({
    userInfo: userInfoReducer,
    questions: questionsReducer,
    ratings: ratingsReducer
});
