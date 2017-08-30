import { connect } from 'react-redux';
import React from 'react';
import { createEvent, fetchSingleEvent, updateEvent } from '../../actions/event_actions';
import CreateEventTicket from '../event_tickets/create_event_ticket';
import { merge, values } from 'lodash';
import { categories } from './categories';



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
      category: "",
      imageFile: null,
      imageUrl: null,
      event_tickets_attributes: {
        0: {
          ticket_type: "",
          max_quantity: null,
          price: null
        }
      },
      tickets: [<CreateEventTicket key={0} index={0} handleTicketChange={this.handleTicketChange}/>]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addTicket = this.addTicket.bind(this);
    this.removeTicket = this.removeTicket.bind(this);
    this.updateFile = this.updateFile.bind(this);
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
        city_state_zip: nextProps.event.city_state_zip,
        category: nextProps.event.category
      });
    }
  }

  handleSubmit(e) {

    e.preventDefault();
    if (this.props.match.params.id) {
      const event = merge({}, this.state)
      delete event.tickets;
      event.event_tickets_attributes = JSON.stringify({})
      this.props.updateEvent(event)
      .then(({ event }) => {
        this.props.history.push(`/events/${event.id}`);
      })
    } else {
      const event_tickets_attributes = values(this.state.event_tickets_attributes);
      const event = merge({}, this.state)
      event.event_tickets_attributes = event_tickets_attributes;
      delete event.tickets;
      var formData = new FormData();

      formData.append("event[title]", this.state.title);
      formData.append("event[description]", this.state.description);
      formData.append("event[date]", this.state.date);
      formData.append("event[time]", this.state.time);
      formData.append("event[venue]", this.state.venue);
      formData.append("event[address]", this.state.address);
      formData.append("event[city_state_zip]", this.state.city_state_zip);
      formData.append("event[category]", this.state.category);
      formData.append("event[image]", this.state.imageFile);
      formData.append("event[event_tickets_attributes]", JSON.stringify(this.state.event_tickets_attributes));

    this.props.createEvent(formData)
      .then(({ event }) => {
        this.props.history.push(`/events/${event.id}`);
      });
    }
  }

  addTicket(e) {
    e.preventDefault();
    let newTickets = this.state.tickets.concat([<CreateEventTicket key={this.state.tickets.length} index={this.state.tickets.length} handleTicketChange={this.handleTicketChange}/>])
    this.setState({ tickets: newTickets });
    let newTicketsAttrs = merge({}, this.state.event_tickets_attributes,
      {[newTickets.length-1]: {ticket_type: "",
                               max_quantity: null,
                               price: null}
                             });
    this.setState({event_tickets_attributes: newTicketsAttrs});
  }

  removeTicket(e) {
    e.preventDefault();
    let newTickets = this.state.tickets.slice(0,this.state.tickets.length - 1)
    let newTicketsAttrs = merge({}, this.state.event_tickets_attributes);
    delete newTicketsAttrs[newTickets.length];
    this.setState({ event_tickets_attributes: newTicketsAttrs, tickets: newTickets })
  }

  handleChange(property) {
    return(e) => {
      this.setState({
        [property]: e.target.value
      });
    };
  }

  updateFile(e) {
      var file = e.currentTarget.files[0];
      var fileReader = new FileReader();
      fileReader.onloadend = function () {
        this.setState({ imageFile: file, imageUrl: fileReader.result });
      }.bind(this);

      if (file) {
        fileReader.readAsDataURL(file);
      }
    }

  renderTicketForm() {
    if (!this.props.match.params.id) {
    return(
      <section>
          <h1 className="create-ticket-form-header">Create Tickets</h1>
        <div className="tickets-header">
          <h2 className="ticket-type">Ticket Type</h2>
          <div className="flex-right">
            <div className="shrink-word">
              <h2 className="quantity-available">Quantity Available</h2>
            </div>
            <h2 className="price">Price</h2>
          </div>
        </div>
          <div className= "create-tickets-container">
            <ul>
              <div className="ticket-form-holder">
                {this.state.tickets.map(ticketForm =>
                  ticketForm)
                }
                <div className="move-button-to-center-1">
                  <button className="event-form-button" onClick={this.addTicket}> Add Ticket </button>
                  <button className="event-form-button" onClick={this.removeTicket}> Remove Ticket </button>
                </div>
              </div>
            </ul>

          </div>
      </section>
    )
  } else {
    return null;
  }
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
                                type='date'
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
                                      placeholder="123 Anywhere St"
                                      className="form-input"
                                      ref="address"
                                      type='text'
                                      onChange={this.handleChange('address')}
                                      required/>

                                    <label
                                      className="form-label form-dropdown-label">CITY, STATE, ZIP</label>
                                      <input
                                        value={this.state.city_state_zip}
                                        placeholder="New York, NY 10004"
                                        className="form-input"
                                        ref="city_state_zip"
                                        type='text'
                                        onChange={this.handleChange('city_state_zip')}
                                        required/>

                                        <label className="form-dropdown">CATEGORY</label>
                                          <select onChange={this.handleChange('category')} value={this.state.category} ref="category" placeholder= "Choose a category" className="form-label">
                                          <option value=""> Select a Category</option>
                                          {categories.map((category)=>(
                                            <option key={category} value={category}> {category} </option>
                                          ))}
                                          </select >

                                        {this.renderTicketForm()}

                                        <div>
                                            <label className="form-label">Upload Image </label>
                                              <input
                                               type='file'
                                                onChange={this.updateFile}
                                              />
                                        </div>

                                      <div className="move-button-to-center">
                                        <button className="event-form-button">{this.props.match.params.id ? "EDIT EVENT" : "CREATE EVENT!"}</button>
                                      </div>
                </form>
            </div>
          </section>

      </section>
    );
  }
}


const mapStateToProps = ( { events, session, errors },ownProps) => {
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
