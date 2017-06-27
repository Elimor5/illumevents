import * as EventTicketAPIUtil from '../util/event_ticket_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_EVENT_TICKETS = "RECEIVE_EVENT_TICKETS";
export const RECEIVE_EVENT_TICKET = "RECEIVE_EVENT_TICKET";
export const REMOVE_EVENT_TICKET = "REMOVE_EVENT_TICKET";
export const EVENT_TICKET_ERROR = "EVENT_TICKET_ERROR";

export const receiveEventTickets = eventTickets => ({
  type: RECEIVE_EVENT_TICKETS,
  eventTickets
});

export const receiveEventTicket = eventTicket => ({
  type: RECEIVE_EVENT_TICKET,
  eventTicket
});

export const removeEventTicket = eventTicket => ({
  type: REMOVE_EVENT_TICKET,
  eventTicket
});

export const eventError = error => ({
  type: EVENT_TICKET_ERROR,
  error
});


// async actions
export const fetchAllEventTickets = () => dispatch => (
  EventAPIUtil.fetchAllEventTickets().then(eventTickets => dispatch(receiveEventTickets(eventTickets)))
);

export const fetchSingleEventTicket = id => dispatch => (
  EventAPIUtil.fetchSingleEventTicket(id).then(eventTicket => dispatch(receiveEventTicket(eventTicket)))
);

export const createEventTicket = eventTicket => dispatch => (
  EventAPIUtil.createEventTicket(eventTicket)
  .then(eventTicket =>  {
    dispatch(clearErrors());
    return dispatch(receiveEventTicket(eventTicket));
  },
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateEventTicket = eventTicket => dispatch => (
  EventAPIUtil.updateEventTicket(eventTicket).then(eventTicket => dispatch(receiveEventTicket(eventTicket)))
);

export const deleteEventTicket = eventTicket => dispatch => {
  return EventAPIUtil.deleteEventTicket(eventTicket)
    .then(eventTicket => dispatch(removeEvent(eventTicket)));
};
