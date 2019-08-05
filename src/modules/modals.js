import { fromJS } from 'immutable';

export const ADD_MODAL = 'ADD_MODAL';
export const SET_MODAL = 'SET_MODAL';
export const REMOVE_MODAL = 'REMOVE_MODAL';

export const defaultState = fromJS({});

export default (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_MODAL: {
      const { modal } = payload;
      return state.merge(fromJS({ [modal.id]: modal }));
    }
    case SET_MODAL: {
      const { id, status } = payload;
      return state.setIn([id, 'status'], status);
    }

    case REMOVE_MODAL: {
      const { id } = payload;

      return state.filter(modal => {
        return modal.get('id') !== id;
      });
    }
    default:
      return state;
  }
};

export const addModal = ({ id }) => {
  return {
    type: ADD_MODAL,
    payload: {
      modal: { id },
    },
  };
};

export const removeModal = ({ id, status }) => dispatch => {
  // transition
  dispatch({
    type: SET_MODAL,
    payload: { id, status },
  });

  // remove
  setTimeout(
    () =>
      dispatch({
        type: REMOVE_MODAL,
        payload: { id },
      }),
    600
  );
};
