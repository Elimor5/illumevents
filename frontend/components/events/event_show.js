import { connect } from 'react-redux';
import React from 'react';
import { fetchSingleEvent, deleteEvent } from '../../actions/event_actions';
import { Link } from 'react-router-dom';
import EventTicketShowItem from '../event_tickets/event_ticket_show';


class EventShow extends React.Component {

  componentDidMount() {
    this.props.fetchSingleEvent(this.props.match.params.id);
  }

  monthParse () {
    const months = {
      "01": "JAN",
      "02": "FEB",
      "03": "MAR",
      "04": "APR",
      "05": "MAY",
      "06": "JUN",
      "07": "JUL",
      "08": "AUG",
      "09": "SEP",
      "10": "OCT",
      "11": "NOV",
      "12": "DEC"
    };
    return months[this.props.event.date.slice(0,2)];
  }




  render() {
    const { event } = this.props;

    if (event)
    return (
      <section>
        <div className="event-show-outer-container">
          <div className="event-show-inner-container">
            <div className="event-pic-title">
              <img className= "temp-img" src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F31999639%2F205801290872%2F1%2Foriginal.jpg?w=800&rect=123%2C57%2C1948%2C974&s=a6cede3ab22535081db025a40f2de16f"></img>
              <div className="event-title">
                <div className="event-title-date">
                  <h1 className="event-title-date-item-1">{this.monthParse()}</h1>
                  <h1 className="event-title-date-item-2">{event.date.slice(3,5)}</h1>
                </div>
                  <div className="event-title-container">
                      <h1 className="event-title"> {event.title}</h1>
                      <h2 className="event-author">by {event.username}</h2>
                  </div>
                  <div className= "event-show-ticket-summary">

                  </div>
              </div>

            </div>
            <div className="tickets-bookmarks-bar">
              <div className="tickets-bar-button-container">
                <button className="tickets-button"> TICKETS</button>
              </div>
            </div>

            <div className="event-show-description-info-container">
              <div className="space-container"></div>
              <div className="description-container">
                <h1 className="event-location-title">DESCRIPTION</h1>
                <p className="event-description-content">{event.description}</p>
              </div>
              <div className="space-container"></div>
              <div className="info-container">
                <div className="event-time-date"></div>
                  <h1 className="event-location-title">DATE & TIME</h1>
                  <div className="event-show-time-date">
                    <h2 className="event-show-location-item">{event.date}</h2>
                    <h2 className="event-show-location-item">{event.time}</h2>
                  </div>
                <div className="event-location">
                  <h1 className="event-location-title">LOCATION</h1>
                  <div className="event-show-location">
                    <h2 className="event-show-location-item">{event.venue}</h2>
                    <h2 className="event-show-location-item">{event.address}</h2>
                    <h2 className="event-show-location-item">{event.city_state_zip}</h2>
                  </div>
                </div>
              </div>
            </div>

            {event.event_tickets.map(event_ticket =>
              <li className="event-ticket-list">
               <EventTicketShowItem key={event_ticket.id} event_ticket = {event_ticket}/>
              </li>
            )}


            <h1>{event.title}</h1>
              <Link to={`/edit/${event.id}`}>Edit </Link>
                <Link to="/">
                  <button onClick={deleteEvent(event)}>Delete</button>
                </Link>
          </div>
        </div>
      </section>
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
