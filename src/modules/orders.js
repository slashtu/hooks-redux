import { fromJS } from 'immutable';
import uuidv1 from 'uuid/v1';

import { ADD_ORDER_ITEM } from './orderList.js';

export const CREATE_ORDER = 'CREATE_ORDER';
export const UPDATE_ORDER = 'UPDATE_ORDER';
export const DELETE_ORDER = 'DELETE_ORDER';

export const defaultState = fromJS({});

const orders = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_ORDER: {
      const { order } = payload;
      return state.merge(fromJS({ [order.id]: order }));
    }
    case UPDATE_ORDER: {
      const { order } = payload;
      return state.mergeDeep(fromJS({ [order.id]: order }));
    }
    case DELETE_ORDER: {
      const { id } = payload;
      return state.setIn([id, 'activated'], false);
    }
    default:
      return state;
  }
};

export const createOrder = ({ name, price, notes }) => dispatch => {
  const id = uuidv1();

  dispatch({
    type: CREATE_ORDER,
    payload: { order: { id, name, price, notes, activated: true } },
  });

  dispatch({
    type: ADD_ORDER_ITEM,
    payload: { id },
  });
};

export const updateOrder = ({ id, name, price, notes }) => dispatch => {
  dispatch({
    type: UPDATE_ORDER,
    payload: { order: { id, name, price, notes } },
  });
};

export const deleteOrder = id => dispatch => {
  dispatch({
    type: DELETE_ORDER,
    payload: { id },
  });
};

export default orders;
