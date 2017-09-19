
import React from 'react';
import { connect } from 'react-redux';
import { fetchAllEvents } from '../../actions/event_actions';
import { allEvents} from '../../reducers/selectors';
import BrowseEventItem from '../browse_events/browse_event_item';
import { TicketItem } from './user_tickets'
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
          case "/dashboard/tickets":
            userEvents = [];
            break;
        }


        return (
          <section>

              <div className="browse-page-outer-container">
                  <div className="categories-google-maps-browse-dashboard">
                    <div className="user-dashboard-outer-display">
                      <h1 className="categories-header"> User Dashboard </h1>
                      <Link className=".subcategory-link" to="/dashboard/bookmarks">Bookmarks</Link>
                      <Link className=".subcategory-link" to="/dashboard">Events Hosted</Link>
                      <Link className=".subcategory-link" to="/dashboard/tickets">Tickets</Link>
                    </div>
                  </div>
                  <div className="browse-event-placeholder">
                  </div>
                  <div className="homepage-events">
                    <ul className="browse-events-container">
                      {userEvents.reverse().map(event =>
                        <BrowseEventItem key={event.id} event={event} />)
                      }

                     {this.props.path === "/dashboard/tickets" ?
                     this.props.users.tickets.map((ticket) =>
                    <TicketItem key ={ticket.id} ticket = {ticket} />)
                      : null }
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
