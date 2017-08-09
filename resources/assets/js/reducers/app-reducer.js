import { ACTIONS } from '../actions';

export default function(state = { error: false, busy: false, hasResult: false }, action) {
    switch (action.type) {
        case ACTIONS.APP_ERROR:
            return { ...state, error: action.payload };
        case ACTIONS.APP_BUSY:
            return { ...state, busy: action.payload };
        case ACTIONS.RESULT_FETCH:
            return { ...state, hasResult: true };
        default:
            return state;
    }
}
