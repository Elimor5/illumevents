import BrowseEventsSidebar from './browse_events_sidebar';
import React from 'react';
import { connect } from 'react-redux';
import { allEvents} from '../../reducers/selectors';
import BrowseEventItem from './browse_event_item';
import { Link } from 'react-router-dom';
import { createBookmark, deleteBookmark, fetchUserInfo } from '../../actions/user_actions';
import PaginationBar from './pagination_bar';

class BrowseEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    // // this.props.requestEvents();
    // if (this.props.loggedIn) {
    //   this.props.fetchUserInfo(this.props.userId);
    // }
  }


  render() {
    const { events, errors, filters } = this.props;
    return (
      <section>
          <div className="browse-page-outer-container">
              <BrowseEventsSidebar />
              <div className="browse-event-placeholder">
              </div>
              <div className="homepage-events">
                <ul className="browse-events-container">
                {filters["errors"] ? <h1 className="event-browse-map-error">{filters["errors"]}</h1> : null}
                  {events.reverse().map(event =>
                    <BrowseEventItem
                    key={event.id}
                    event={event}
                    createBookmark={this.props.createBookmark}
                    deleteBookmark={this.props.deleteBookmark}
                    loggedIn={this.props.loggedIn}
                    users={this.props.users} />)
                  }
                </ul>
              </div>
          </div>
          <div className="browse-page-footer">
            <PaginationBar count={this.props.count} />
          </div>
      </section>
    );
  }

}

const mapStateToProps = ({ events, errors, users, session, filters }) => {
  return ({
    events: allEvents(events),
    users,
    loggedIn: Boolean(session.currentUser),
    errors,
    filters,
    count: filters.eventCount,
  });

};

const mapDispatchToProps = (dispatch) => ({
  fetchUserInfo: (id) => dispatch(fetchUserInfo(id)),
  createBookmark: (eventId) => dispatch(createBookmark(eventId)),
  deleteBookmark: (eventId) => dispatch(deleteBookmark(eventId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BrowseEvents);
