import { UPDATE_FILTER,
         CLEAR_FILTER,
         UPDATE_CITY,
         FILTER_ERROR,
         CLEAR_FILTER_ERRORS } from '../actions/filter_actions';
import { RECEIVE_EVENTS } from '../actions/event_actions';
import merge from 'lodash/merge';

const defaultFilters = Object.freeze({
  bounds: {},
  category: null,
  date: null,
  price: null,
  errors: "",
  eventCount: "",
});

const filtersReducer = (state = defaultFilters, action) => {
  let nextState;

  switch (action.type) {
    case UPDATE_FILTER:
      let newFilter = {[action.filter]: action.value};
      return merge({}, state, newFilter);
    case CLEAR_FILTER:
      return merge({}, state, defaultFilters);
    case FILTER_ERROR:
      newFilter = {["errors"]: action.error };
      return merge({}, state, newFilter);
    case CLEAR_FILTER_ERRORS:
      newFilter = {["errors"]: ""};
      return merge({}, state, newFilter);
    case RECEIVE_EVENTS:
      newFilter = {["eventCount"]: action.count};
      return merge({}, state, newFilter);
    default:
      return state;

  }
};

export default filtersReducer;
