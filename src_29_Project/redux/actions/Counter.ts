<<<<<<< HEAD
import actionTypes from './actionTypes';

// 递增
export const increment = (value: any) => {
  return {
    type: actionTypes.COUNTER_INCREMENT,
    payload: value
  }
}

// 递减
export const decrement = (value: any) => {
  return {
    type: actionTypes.COUNTER_DECREMENT,
    payload: value
  }
=======
/*
 * @Date: 2023-11-28 17:02:50
 * @Description: action
 */
import actionTypes from './actionTypes';

/* 递增 */
export const increment = (value: any) => {
    return {
        type: actionTypes.COUNTER_INCREMENT,
        payload: value,
    }
}

/* 递减 */
export const decrement = (value: any) => {
    return {
        type: actionTypes.COUNTER_DECREMENT,
        payload: value
    }
>>>>>>> 2f1990974ff6510a278077bc0aad090b9f7cee6a
}