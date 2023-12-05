/*
 * @Date: 2023-11-28 16:56:05
 * @Description: description
 */
import actionTypes from '../actions/actionTypes';

const initState = {
    num: 1
}

export default (state = initState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case actionTypes.COUNTER_INCREMENT:
            
            return {
                ...state,
                num: state.num + action.payload
            }
        case actionTypes.COUNTER_DECREMENT:
            return {
                ...state,
                num: state.num - action.payload
            }
    
        default:
            return state;
    }
}
