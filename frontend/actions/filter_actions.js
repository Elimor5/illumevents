export const UPDATE_FILTER = 'UPDATE_FILTER';
import { fetchAllEvents } from './event_actions';

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  // debugger
  fetchAllEvents(getState().filters)(dispatch);
};
