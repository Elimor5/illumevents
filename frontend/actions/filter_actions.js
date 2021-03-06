export const UPDATE_FILTER = 'UPDATE_FILTER';
export const CLEAR_ALL_FILTERS = 'CLEAR_ALL_FILTERS';
export const FILTER_ERROR = 'FILTER_ERROR';
export const CLEAR_FILTER_ERRORS = 'CLEAR_FILTER_ERRORS';
import { fetchAllEvents } from './event_actions';

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const clearAllFilters = () => ({
  type: CLEAR_ALL_FILTERS,
});

export const filterErrors = (error) => ({
  type: FILTER_ERROR,
  error
});

export const clearFilterError = () => ({
  type: CLEAR_FILTER_ERRORS
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  fetchAllEvents(getState().filters)(dispatch);
};

export const clearFilters = () => dispatch => {
  dispatch(clearAllFilter());
};

export const updateFilterErrors = (error) => dispatch => {
  dispatch(filterErrors(error));
};

export const clearFilterErrors = dispatch => {
  dispatch(clearFilterError());
};
