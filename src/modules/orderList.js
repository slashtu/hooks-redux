import { fromJS } from 'immutable';

export const ADD_ORDER_ITEM = 'ADD_ORDER_ITEM';
export const UPDATE_ORDER_ITEM = 'UPDATE_ORDER_ITEM';
export const DELETE_ORDER_ITEM = 'DELETE_ORDER_ITEM';

export const defaultState = fromJS({
  data: [],
});

const orderList = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ORDER_ITEM:
      return state.update('data', arr => arr.push(payload.id));
    case UPDATE_ORDER_ITEM:
      return state;
    case DELETE_ORDER_ITEM:
      return state;
    default:
      return state;
  }
};

export default orderList;
