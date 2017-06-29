import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './error_reducer';
import eventsReducer from './events_reducer';
import modalReducer from './modal_reducer';
import usersReducer from './users_reducer';


const RootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  events: eventsReducer,
  modals: modalReducer,
  users: usersReducer,
});

export default RootReducer;
