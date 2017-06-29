import { RECEIVE_USER_INFO } from '../actions/user_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_USER_INFO:
      const newUserInfo = action.userInfo;
      return merge({}, state, newUserInfo);

    default:
      return state;
  }
};

export default usersReducer;
