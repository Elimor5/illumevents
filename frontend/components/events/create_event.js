import { connect } from 'react-redux';
import React from 'react';
import { createEvent, fetchSingleEvent, updateEvent } from '../../actions/event_actions';
import CreateEventTicket from '../event_tickets/create_event_ticket';
import { merge } from 'lodash';

class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
    this.handleTicketChange = this.handleTicketChange.bind(this);
    this.state = {
      title: "",
      description: "",
      date: "",
      time: "",
      venue: "",
      address: "",
      city_state_zip: "",
      event_tickets_attributes: {
        0: {
          ticket_type: "",
          max_quantity: null,
          price: null
        }
      },
      tickets: [<CreateEventTicket index={0} handleTicketChange={this.handleTicketChange}/>]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addTicket = this.addTicket.bind(this);
    this.removeTicket = this.removeTicket.bind(this);
  }

  componentDidMount() {
    let id = this.props.match.params.id
    if (this.props.match.params.id) {
      this.props.fetchSingleEvent(id);
    }
  }

  handleTicketChange(property, index) {
    return (e) => {
      const newTickets = merge({}, this.state.event_tickets_attributes, {[index]: {[property]: e.currentTarget.value}})
      // const newTicket = Object.assign({}, this.state.event_tickets_attributes[index]
      // newTicket[property] = e.currentTarget.value;
      this.setState({event_tickets_attributes: newTickets});
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.event.title) {
      this.setState({
        id: nextProps.match.params.id,
        title: nextProps.event.title,
        description: nextProps.event.description,
        date: nextProps.event.date,
        time: nextProps.event.time,
        venue: nextProps.event.venue,
        address: nextProps.event.address,
        host_id: nextProps.event.host_id,
        city_state_zip: nextProps.event.city_state_zip
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.match.params.id) {
      this.props.updateEvent(this.state)
      .then(({ event }) => {
        this.props.history.push(`/events/${event.id}`);
      })
    } else {
    this.props.createEvent(this.state)
      .then(({event}) => {

        this.props.history.push(`/events/${event.id}`);
      });
    }
  }

  addTicket() {
    let newTickets = this.state.tickets.concat([<CreateEventTicket index={this.state.tickets.length} handleTicketChange={this.handleTicketChange}/>])
    this.setState({ tickets: newTickets });
    let newTicketsAttrs = merge({}, this.state.event_tickets_attributes,
      {[newTickets.length-1]: {ticket_type: "",
                               max_quantity: null,
                               price: null}
                             });
    this.setState({event_tickets_attributes: newTicketsAttrs});
  }

  removeTicket() {
    let newTickets = this.state.tickets.slice(0,this.state.tickets.length - 1)
    this.setState({tickets: newTickets });
  }



  handleChange(property) {
    return(e) => {
      this.setState({
        [property]: e.target.value
      });
    };
  }

  render () {

    return (
      <section className="backdrop">

        <section className="event-form-container">
          <h1 className="event-form-header"> {this.props.match.params.id ? "Edit Event" : "Create An Event"} </h1>
            <div className="form-box">
              <div>
                <h1 className="create-event-header"> Event Details </h1>
              </div>
                <form className="event-form"
                onSubmit={this.handleSubmit}>
                  <label className="form-label">EVENT TITLE </label>
                    <input
                      value={this.state.title}
                      placeholder="Give it a short distinct name"
                      className="form-input"
                      ref="title"
                      type='text'
                      onChange={this.handleChange('title')}
                      required/>

                    <label className="form-label"> VENUE </label>
                          <input
                            value={this.state.venue}
                            placeholder="Pick a place!"
                            className="form-input"
                            ref="venue"
                            type='text'
                            onChange={this.handleChange('venue')}
                            required/>
                      <div className="date-time">
                        <div>
                          <label className="form-label"> DATE </label>
                              <input
                                value={this.state.date}
                                placeholder="mm/dd/yy"
                                className="form-input"
                                ref="date"
                                type='text'
                                onChange={this.handleChange('date')}
                                required/>
                        </div>
                            <div>
                                <label className="form-label">TIME</label>
                                  <input
                                    value={this.state.time}
                                    placeholder="hh:mm am/pm"
                                    className="form-input"
                                    ref="time"
                                    type='text'
                                    onChange={this.handleChange('time')}
                                    required/>
                            </div>

                        </div>
                                <label className="form-label">EVENT DESCRIPTION</label>
                                    <textarea
                                      value={this.state.description}
                                      placeholder=""
                                      className="form-textarea"
                                      ref="description"
                                      type='textarea'
                                      onChange={this.handleChange('description')}
                                      />

                                <label className="form-label">ADDRESS</label>
                                    <input
                                      value={this.state.address}
                                      placeholder="dd/mm/yy"
                                      className="form-input"
                                      ref="address"
                                      type='text'
                                      onChange={this.handleChange('address')}
                                      required/>

                                    <label
                                      className="form-label">CITY, STATE, ZIP</label>
                                      <input
                                        value={this.state.city_state_zip}
                                        placeholder="Like so New York, NY 10004"
                                        className="form-input"
                                        ref="city_state_zip"
                                        type='text'
                                        onChange={this.handleChange('city_state_zip')}
                                        required/>
                                      <button className="event-form-button">{this.props.match.params.id ? "EDIT EVENT" : "CREATE EVENT!"}</button>
                </form>
                <h1>Create Tickets</h1>
              <div className="tickets-header">
                <h2>Ticket Type</h2>
                <h2>Quantity Available</h2>
                <h2>Price</h2>
              </div>
                <div className= "create-tickets-container">
                  <ul>
                    {this.state.tickets.map(ticketForm =>
                      ticketForm)
                    }
                  </ul>
                  <button className="add-ticket-button" onClick={this.addTicket}> + </button>
                  <button className="add-ticket-button" onClick={this.removeTicket}> - </button>
                </div>
            </div>
          </section>

      </section>
    );
  }
}


const mapStateToProps = ( { events, session },ownProps) => {
  return {
    userId: session.currentUser.id,
    event: events[ownProps.match.params.id] || {}
  };
};

const mapDispatchToProps = dispatch => ({
  createEvent: (event) => dispatch(createEvent(event)),
  fetchSingleEvent: (id) => dispatch(fetchSingleEvent(id)),
  updateEvent: (event) => dispatch(updateEvent(event))
});



export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
