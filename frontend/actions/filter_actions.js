export const UPDATE_FILTER = 'UPDATE_FILTER';
export const CLEAR_FILTER = 'CLEAR_FILTER';
export const UPDATE_CITY = 'UPDATE_CITY';
export const FILTER_ERROR = 'FILTER_ERROR';
export const CLEAR_FILTER_ERRORS = 'CLEAR_FILTER_ERRORS';
import { fetchAllEvents } from './event_actions';

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const clearFilter = () => ({
  type: CLEAR_FILTER,
});

export const changeCity = (value) => ({
  type: UPDATE_CITY,
  value
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
  // debugger
  fetchAllEvents(getState().filters)(dispatch);
};

export const clearFilters = () => dispatch => {
  dispatch(clearFilter());
};

export const updateCity = (value) => dispatch => {
  dispatch(changeCity(value));
};

export const updateFilterErrors = (error) => dispatch => {
  dispatch(filterErrors(error));
};

export const clearFilterErrors = dispatch => {
  dispatch(clearFilterError());
};
