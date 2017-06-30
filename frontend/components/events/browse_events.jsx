import { categories } from './categories';
import React from 'react';
import { connect } from 'react-redux';
import { fetchAllEvents } from '../../actions/event_actions';
import { allEvents} from '../../reducers/selectors';
import BrowseEventItem from './browse_event_item';
import { Link } from 'react-router-dom';


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

          <div className="browse-page-outer-container">
              <div className="categories-google-maps-browse">
              <h1 className="categories-header"> Categories </h1>
                {categories.map((category)=>(
                  <button className="category-button" onClick={() => this.props.requestEvents(category)}><li className="browse-category-list">{category}</li></button>
                ))}
              </div>
              <div className="browse-event-placeholder">
              </div>
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
  requestEvents: (category) => dispatch(fetchAllEvents(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BrowseEvents);
