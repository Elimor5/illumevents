import { categories } from './categories';
import React from 'react';
import { connect } from 'react-redux';
import { fetchAllEvents } from '../../actions/event_actions';
import { allEvents} from '../../reducers/selectors';
import BrowseEventItem from './browse_event_item';


class BrowseEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestEvents();
  }

  render() {
    const { events, errors } = this.props;
    return (
      <section>
        <div className= "spash-container"></div>
          <div className="homepage-outer-container">
            <div className="homepage-events">
              <ul className="browse-events-container">
                {events.reverse().map(event =>
                  <BrowseEventItem key={event.id} event={event} />)
                }
              </ul>
            </div>
          </div>
      </section>
    );
  }

}

const mapStateToProps = ({ events, errors }) => {
return ({
  events: allEvents(events),
  errors
})

};

const mapDispatchToProps = (dispatch) => ({
  requestEvents: () => dispatch(fetchAllEvents()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BrowseEvents);
