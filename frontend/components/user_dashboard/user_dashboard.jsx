
import React from 'react';
import { connect } from 'react-redux';
import { fetchAllEvents } from '../../actions/event_actions';
import { allEvents} from '../../reducers/selectors';
import BrowseEventItem from '../events/browse_event_item';
import { fetchUserInfo } from '../../actions/user_actions';
import { Link } from 'react-router-dom';


class BrowseEvents extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount(){
    this.props.requestEvents();
    this.props.fetchUserInfo(this.props.userId);
  }

  render() {
    const { events, errors } = this.props;


      if (Object.keys(this.props.users).length > 2) {


          const userEvents = this.props.users.events
          debugger
        return (
          <section>

              <div className="browse-page-outer-container">
                  <div className="categories-google-maps-browse">
                  <h1 className="categories-header"> Categories </h1>

                  </div>
                  <div className="browse-event-placeholder">
                  </div>
                  <div className="homepage-events">
                    <ul className="browse-events-container">
                      {userEvents.reverse().map(event =>
                        <BrowseEventItem key={event.id} event={event} />)
                      }
                    </ul>
                  </div>
              </div>
          </section>
       );
     } else {
       return( null )
     }
  }

}

const mapStateToProps = ({ events, session, users, errors }) => {
return ({
  events: allEvents(events),
  errors,
  users: users,
  userId: session.currentUser.id,
})

};

const mapDispatchToProps = (dispatch) => ({
  requestEvents: (category) => dispatch(fetchAllEvents(category)),
  fetchUserInfo: (id) => dispatch(fetchUserInfo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BrowseEvents);
