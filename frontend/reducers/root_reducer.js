import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './error_reducer';
import eventsReducer from './events_reducer';


const RootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  events: eventsReducer,
});

export default RootReducer;
