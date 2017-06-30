import * as EventAPIUtil from '../util/user_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_USER_INFO = "RECEIVE_USER_INFO";
export const REMOVE_BOOKMARK = "REMOVE_BOOKMARK";

export const receiveUserInfo = userInfo => ({
  type: RECEIVE_USER_INFO,
  userInfo
});

export const removeBookmark = bookmarkId => ({
  type: REMOVE_BOOKMARK,
  bookmarkId
});



export const fetchUserInfo = id => dispatch => (
  EventAPIUtil.fetchUserInfo(id).then(userInfo => dispatch(receiveUserInfo(userInfo)))
);

export const createBookmark = eventId => dispatch => (
  EventAPIUtil.createBookmark(eventId).
  then(user => dispatch(receiveUserInfo(user)))
);

export const deleteBookmark = (eventId) => dispatch => {
  
  return EventAPIUtil.deleteBookmark(eventId).
    then(bookmarkId => dispatch(removeBookmark(bookmarkId)));
};
