import { UPDATE_FILTER,
         CLEAR_ALL_FILTERS,
         UPDATE_CITY,
         FILTER_ERROR,
         CLEAR_FILTER_ERRORS } from '../actions/filter_actions';
import { RECEIVE_EVENTS } from '../actions/event_actions';
import merge from 'lodash/merge';

const defaultFilters = Object.freeze({
  bounds: {},
  category: null,
  coordinates: {},
  date: null,
  price: null,
  errors: "",
  eventCount: "",
  page: 1,
});

const filtersReducer = (state = defaultFilters, action) => {
  let nextState;

  switch (action.type) {
    case UPDATE_FILTER:
      let newFilter;

      newFilter = action.filter === "page" ?
       { "page": action.value } :
       { [action.filter]: action.value, "page": 1, };

      return merge({}, state, newFilter);
    case CLEAR_ALL_FILTERS:
      return merge({}, state,  defaultFilters);
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
