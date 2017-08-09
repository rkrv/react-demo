import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import resultReducer from './result-reducer';
import appReducer from './app-reducer';

export default combineReducers({
    form: formReducer,
    result: resultReducer,
    app: appReducer
});
