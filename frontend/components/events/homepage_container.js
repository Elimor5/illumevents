import { connect } from 'react-redux';

import { fetchAllEvents } from '../../actions/event_actions';
import { fetchUserInfo, createBookmark, deleteBookmark } from '../../actions/user_actions';
import { allEvents } from '../../reducers/selectors';
import Homepage  from './homepage';

const mapStateToProps = ({ users, session, events, errors }) => {

return ({
  events: allEvents(events),
  loggedIn: Boolean(session.currentUser),
  userId: Boolean(session.currentUser) ? session.currentUser.id : 0,
  users,
  errors,
})

};

const mapDispatchToProps = (dispatch) => ({
  requestEvents: () => dispatch(fetchAllEvents()),
  fetchUserInfo: (id) => dispatch(fetchUserInfo(id)),
  createBookmark: (eventId) => dispatch(createBookmark(eventId)),
  deleteBookmark: (eventId) => dispatch(deleteBookmark(eventId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
