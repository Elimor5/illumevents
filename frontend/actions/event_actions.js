import * as EventAPIUtil from '../util/event_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";
export const EVENT_ERROR = "EVENT_ERROR";


// sync actions
export const receiveEvents = ({ events, count }) => {
  return {
    type: RECEIVE_EVENTS,
    events,
    count
  };
};

export const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

export const removeEvent = event => ({
  type: REMOVE_EVENT,
  event
});

export const eventError = error => ({
  type: EVENT_ERROR,
  error
});



// async actions
export const fetchAllEvents = (filter) => dispatch => {
  return EventAPIUtil.fetchAllEvents(filter).then(events => dispatch(receiveEvents(events)));
};

export const fetchSingleEvent = id => dispatch => (
  EventAPIUtil.fetchSingleEvent(id).then(event => dispatch(receiveEvent(event)))
);

export const createEvent = event => dispatch => (
  EventAPIUtil.createEvent(event)
  .then(event =>  {
    dispatch(clearErrors());
    return dispatch(receiveEvent(event));
  },
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateEvent = event => dispatch => (
  EventAPIUtil.updateEvent(event).then(event => dispatch(receiveEvent(event)))
);

export const deleteEvent = (event) => dispatch => {
  return EventAPIUtil.deleteEvent(event).then(dispatch(removeEvent(event)));
};

export const purchaseTickets = ticketPurchases => dispatch => {
  return EventAPIUtil.purchaseTickets(ticketPurchases)
    .then(null, errors => dispatch(receiveErrors(errors.responseJSON)));
};
