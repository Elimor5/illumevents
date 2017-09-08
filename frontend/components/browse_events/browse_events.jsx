import CategoriesTable  from './categories';
import React from 'react';
import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions';
import { allEvents} from '../../reducers/selectors';
import BrowseEventItem from './browse_event_item';
import { Link } from 'react-router-dom';
import { createBookmark, deleteBookmark, fetchUserInfo } from '../../actions/user_actions';

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
    const { events, errors } = this.props;

    return (
      <section>
          <div className="browse-page-outer-container">
              <CategoriesTable updateFilter={this.props.updateFilter} />
              <div className="browse-event-placeholder">
              </div>
              <div className="homepage-events">
                <ul className="browse-events-container">
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
      </section>
    );
  }

}

const mapStateToProps = ({ events, errors, users, session }) => {

return ({
  events: allEvents(events),
  users,
  loggedIn: Boolean(session.currentUser),
  errors,
})

};

const mapDispatchToProps = (dispatch) => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  fetchUserInfo: (id) => dispatch(fetchUserInfo(id)),
  createBookmark: (eventId) => dispatch(createBookmark(eventId)),
  deleteBookmark: (eventId) => dispatch(deleteBookmark(eventId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BrowseEvents);
