import { connect } from 'react-redux';
import React from 'react';
import { fetchSingleEvent, deleteEvent } from '../../actions/event_actions';
import { Link } from 'react-router-dom';
import EventTicketShowItem from '../event_tickets/event_ticket_show';
import { merge, values } from 'lodash';
import Modal from 'react-modal';
import { modalStyle } from '../modal/modal_style';
import { purchaseTickets } from '../../util/event_api_util';


class EventShow extends React.Component {

  constructor(props) {
    super(props);
    this.handlePurchaseChange = this.handlePurchaseChange.bind(this);
    this.state = {
      purchases: [],
      modalIsOpen: false,
    };

    this.renderTickets = this.renderTickets.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.purchaseTickets = this.purchaseTickets.bind(this);
  }

  componentDidMount() {
    this.props.fetchSingleEvent(this.props.match.params.id);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
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

  handlePurchaseChange(ticket_id) {
    return (e) => {
      const purchasesCopy = this.state.purchases.slice();
      const newPurchase = {
        ticket_id,
        purchase_quantity: e.currentTarget.value
      };
      purchasesCopy.push(newPurchase);
      this.setState({
        purchases: purchasesCopy
      });
    };
  }

  renderTickets() {
    return (
      <div className="event-show-tickets-container">
        {this.props.event.event_tickets.map(event_ticket =>
          <li className="event-ticket-list">
           <EventTicketShowItem className="event-show-ticket-item" key={event_ticket.id} ticketId={event_ticket.id} event_ticket={event_ticket} handlePurchaseChange={this.handlePurchaseChange}/>
          </li>
        )}
      </div>
    );

  }

  purchaseTickets(e) {
    e.preventDefault();
    purchaseTickets(this.state.purchases).then(() => this.closeModal());
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
                        <h1 className="event-author"> in "{event.category}" </h1>
                          <h2 className="event-author">by {event.username}</h2>
                  </div>
                  <div className= "event-show-ticket-summary">

                  </div>
              </div>

            </div>
            <div className="tickets-bookmarks-bar">
              <div className="tickets-bar-button-container">
                <button className="tickets-button" onClick={this.openModal}> TICKETS</button>
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

        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel="Modal"
          style={modalStyle}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={true}>
            <div className="modal-tickets-header">
              <h1 className="modal-tickets-header-content">Select Tickets</h1>
            </div>
            <button className="events-show-modal-close" onClick={this.closeModal}>x</button>
           {this.renderTickets()}
           <button onClick={this.purchaseTickets} className="ticket-checkout-button"> CHECKOUT </button>
           </Modal>


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
  deleteEvent: (event) => dispatch(deleteEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);
