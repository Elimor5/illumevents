import * as EventAPIUtil from '../util/user_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_USER_INFO = "RECEIVE_USER_INFO";

export const receiveUserInfo = userInfo => ({
  type: RECEIVE_USER_INFO,
  userInfo
});

export const fetchUserInfo = id => dispatch => (
  EventAPIUtil.fetchUserInfo(id).then(userInfo => dispatch(receiveUserInfo(userInfo)))
);
