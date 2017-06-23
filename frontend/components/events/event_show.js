import { connect } from 'react-redux';
import React from 'react';
import { fetchSingleEvent, deleteEvent } from '../../actions/event_actions';
import { Link } from 'react-router-dom';


class EventShow extends React.Component {

  componentDidMount() {
    this.props.fetchSingleEvent(this.props.match.params.id);
  }

  render() {
    const { event } = this.props;
    if (event)
    return (
      <div>
        <section className="show-page">
          <h1>{event.title}</h1>
          <Link to={`/edit/${event.id}`}>Edit </Link>
          <button onClick={deleteEvent(event)} > Delete</button>
        </section>
      </div>
    );
    else {
      return null;
    }
  }
}


const mapStateToProps = ({ events }, ownProps) => {
  return {

    event: events[ownProps.match.params.id]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSingleEvent: (id) => dispatch(fetchSingleEvent(id)),
  deleteEvent: (event) => dispatch(deleteEvent(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);
