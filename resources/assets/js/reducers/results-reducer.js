import { ACTIONS } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case ACTIONS.FETCH_RESULT:
            console.log(action.payload);
        default:
            return state;
    }
}
