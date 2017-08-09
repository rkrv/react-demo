import { ACTIONS } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case ACTIONS.RESULT_FETCH:
            return { ...state, ...action.payload }
        default:
            return state;
    }
}
