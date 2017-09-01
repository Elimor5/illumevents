import { connect } from 'react-redux';
import React from 'react';
import { fetchSingleEvent, deleteEvent } from '../../actions/event_actions';
import { createBookmark, deleteBookmark, fetchUserInfo } from '../../actions/user_actions';
import { Link } from 'react-router-dom';
import EventTicketShowItem from '../event_tickets/event_ticket_show';
import { merge, values } from 'lodash';
import Modal from 'react-modal';
import { modalStyle } from '../modal/modal_style';
import { purchaseTickets } from '../../util/event_api_util';
import { months } from './date_parse';
import Map from '../map/map';

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
    this.toggleBookmark = this.toggleBookmark.bind(this);
    this.removeEvent = this.removeEvent.bind(this);
  }




  componentDidMount() {
    this.props.fetchSingleEvent(this.props.match.params.id);
    this.props.fetchUserInfo(this.props.userId);
    window.scrollTo(0, 0);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }


  // monthParse () {
  //
  //   months[this.props.event.date.slice(5,7)];
  // }

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

  toggleBookmark () {

    if (this.props.loggedIn) {
      if (this.props.users.bookmarked_events.includes(this.props.event.id)) {
        this.props.deleteBookmark(this.props.event.id);
      } else {
        this.props.createBookmark(this.props.event.id);
      }
    } else { null }
  }

  removeEvent () {
    this.props.deleteEvent(this.props.event);
  }

  renderTickets() {
    return (
      <ul className="event-show-tickets-container">
        {this.props.event.event_tickets.map((event_ticket, idx) =>
          <li key={idx} className="event-ticket-list">
           <EventTicketShowItem className="event-show-ticket-item" ticketId={event_ticket.id} event_ticket={event_ticket} handlePurchaseChange={this.handlePurchaseChange}/>
          </li>
        )}
      </ul>
    );

  }

  purchaseTickets(e) {
    e.preventDefault();
    purchaseTickets(this.state.purchases).then(() => this.closeModal());
  }

  render() {
    const { event, bookmarks } = this.props;

    if (event)
    return (
      <section>
        <div className="event-show-outer-container">
          <div className="event-show-inner-container">
            <div className="event-pic-title">
              <img className= "temp-img" src={event.image_url} />
              <div className="event-title">
                <div className="event-title-date">
                  <h1 className="event-title-date-item-2">{event.date}</h1>
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
              {(event.host_id === this.props.userId) ?
                 <div>
                  <Link className="event-form-button" to={`/edit/${event.id}`}>Edit </Link>

                    <Link to="/">
                      <button className="event-form-button" onClick={this.removeEvent}>Delete</button>
                    </Link>
                 </div>
                 : null }
                <button className= "bookmarked-event-show"onClick={this.toggleBookmark}>
                { this.props.loggedIn && this.props.users.bookmarked_events && this.props.users.bookmarked_events.includes(this.props.event.id) ? <i className="fa fa-bookmark" aria-hidden="true"></i> : <i className="fa fa-bookmark-o" aria-hidden="true"></i> }
                </button>
                <button className="tickets-button" onClick={this.openModal}>TICKETS</button>
                <div className="space"></div>
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

           <Map
             zoom={16}
             lat={event.lat}
             lng={event.lng}
             style="event-show-map-container"/>
           <div className="footer"></div>

          </div>
        </div>
      </section>
    );
    else {
      return null;
    }
  }
}


const mapStateToProps = ({ session, events, users }, ownProps) => {
  return {
    event: events[ownProps.match.params.id],
    bookmarks: users.bookmarks,
    loggedIn: Boolean(session.currentUser),
    users: users,
    userId: session.currentUser.id,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSingleEvent: (id) => dispatch(fetchSingleEvent(id)),
  deleteEvent: (event) => dispatch(deleteEvent(event)),
  createBookmark: (eventId) => dispatch(createBookmark(eventId)),
  deleteBookmark: (eventId) => dispatch(deleteBookmark(eventId)),
  fetchUserInfo: (id) => dispatch(fetchUserInfo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);
