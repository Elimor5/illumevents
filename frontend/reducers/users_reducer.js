import { RECEIVE_USER_INFO, REMOVE_BOOKMARK } from '../actions/user_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_USER_INFO:
      const newUserInfo = action.userInfo;
      return merge({}, state, newUserInfo);
    case REMOVE_BOOKMARK:
      nextState = merge({}, state);
      const newBookmarkedEvents = [];

      nextState.bookmarked_events.forEach((event_id) =>{
        if (!nextState.bookmarked_events.includes(action.bookmarkId)) {
          newBookmarkedEvents.push(event_id);
        }
      });
      nextState.bookmarked_events = newBookmarkedEvents;
      return nextState;
    default:
      return state;
  }
};

export default usersReducer;
