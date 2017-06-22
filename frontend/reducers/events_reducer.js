import { RECEIVE_EVENTS,
         RECEIVE_EVENT,
         REMOVE_EVENT,
         EVENT_ERROR } from '../actions/event_actions';
import merge from 'lodash/merge';



const eventsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type){
    case RECEIVE_EVENTS:
      nextState = {};
      action.events.forEach(event => nextState[event.id] = event);
      return nextState;
    case RECEIVE_EVENT:
      const newEvent = {[action.event.id]: action.event};
      return merge({}, state, newEvent);
    case REMOVE_EVENT:
      nextState = merge({}, state);
      delete nextState[action.event.id];
      return nextState;
    case EVENT_ERROR:
      alert(action.error);
    default:
      return state;
  }
};

export default eventsReducer;
