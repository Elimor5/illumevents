import { connect } from 'react-redux';

import { fetchAllEvents } from '../../actions/event_actions';
import { allEvents } from '../../reducers/selectors';
import Homepage  from './homepage';

const mapStateToProps = ({ events, errors }) => {
return ({
  events: allEvents(events),
  errors
})

};

const mapDispatchToProps = (dispatch) => ({
  requestEvents: () => dispatch(fetchAllEvents()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
