
import React from 'react';
import { connect } from 'react-redux';
import { fetchAllEvents } from '../../actions/event_actions';
import { allEvents} from '../../reducers/selectors';
import BrowseEventItem from '../events/browse_event_item';
import { fetchUserInfo } from '../../actions/user_actions';
import { Link } from 'react-router-dom';


class UserDashboard extends React.Component {
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
        let userEvents;
        switch (this.props.path) {
          case "/dashboard":
            userEvents = this.props.users.events;
            break;
          case "/dashboard/bookmarks":
              const bookmarked_events = [];
              this.props.events.forEach((event) => {
                if (this.props.users.bookmarked_events.includes(event.id)) {
                  bookmarked_events.push(event);
                }
                userEvents = bookmarked_events;
              });
              break;
        }


        return (
          <section>

              <div className="browse-page-outer-container">
                  <div className="categories-google-maps-browse">
                  <h1 className="categories-header"> Categories </h1>
                    <Link className="button" to="/dashboard/bookmarks">Bookmarks</Link>
                    <Link className="button" to="/dashboard">Events Hosted</Link>
                    <Link className="button" to="/dashboard/bookmarks">Bookmarks</Link>
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

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    requestEvents: (category) => dispatch(fetchAllEvents(category)),
    fetchUserInfo: (id) => dispatch(fetchUserInfo(id)),
    path: ownProps.location.pathname
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
