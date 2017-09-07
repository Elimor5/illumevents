export const UPDATE_FILTER = 'UPDATE_FILTER';
export const CLEAR_FILTER = 'CLEAR_FILTER'
import { fetchAllEvents } from './event_actions';

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const clearFilter = () => ({
  type: CLEAR_FILTER,
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  // debugger
  fetchAllEvents(getState().filters)(dispatch);
};

export const clearFilters = () => dispatch => {
  dispatch(clearFilter());
};
