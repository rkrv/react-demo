import { ACTIONS } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case ACTIONS.FETCH_RESULT:
        case ACTIONS.FETCH_PERSON:
        case ACTIONS.FETCH_FACILITY:
        case ACTIONS.FETCH_EXPOSURE:
            console.log(action.payload);
        default:
            return state;
    }
}
