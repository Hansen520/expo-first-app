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
}