import {
  SHOW_MODAL,
  HIDE_MODAL
} from '../actions/modal_actions';
import merge from 'lodash/merge';

const initialState = Object.freeze({
  visible: false,
  content: null
});

const modalReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case SHOW_MODAL:
      newState = { visible: true, content: action};
      return newState;
    case HIDE_MODAL:
      newState = { visible: false, content: null};
      return newState;
    default:
      return state;
  }
};

export default modalReducer;
