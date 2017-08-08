import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import resultsReducer from './results-reducer';

export default combineReducers({
    form: formReducer,
    results: resultsReducer
});
