import { RECEIVE_EVENT_TICKETS,
         RECEIVE_EVENT_TICKET,
         REMOVE_EVENT_TICKET,
         EVENT_TICKET_ERROR } from '../actions/event_ticket_actions';
import merge from 'lodash/merge';

const eventTicketsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case RECEIVE_EVENT_TICKETS:
    return action.eventTickets;
  case RECEIVE_EVENT_TICKET:
    const newEventTicket = {[action.eventTicket.id]: action.eventTicket};
    return merge({}, state, newEventTicket);
  case REMOVE_EVENT_TICKET:
    nextState = merge({}, state);
    delete nextState[action.eventTicket.id];
    return nextState;
  case EVENT_TICKET_ERROR:
    alert(action.error);
  default:
    return state;
}
};

export default eventTicketsReducer;
