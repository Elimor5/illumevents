import { connect } from 'react-redux';
import React from 'react';
import { createEvent } from '../../actions/event_actions';

class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      location: "",
      description: "",
      date: "",
      time: "",
      ticket_price: 100,
      ticket_quantity: 500,
      venue: "some place",
      address: "",
      city_state_zip: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createEvent(this.state)
      .then(({event}) => {
        debugger
        this.props.history.push(`/events/${event.id}`);
      });
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
      <section>
        <div>
          <h1> Create An Event </h1>
        </div>
          <form className=""
          onSubmit={this.handleSubmit}>
            <label
              className="form-label">Title:
              <input
                value={this.state.title}
                placeholder="Give it a short distinct name"
                className="form-input"
                ref="title"
                type='text'
                onChange={this.handleChange('title')}
                required/>
            </label>
              <label
                className="form-label">Location:
                <input
                  value={this.state.location}
                  placeholder="Specify where its held"
                  className="form-input"
                  ref="location"
                  type='text'
                  onChange={this.handleChange('location')}
                  required/>
              </label>
                <label
                  className="form-label">Date:
                  <input
                    value={this.state.date}
                    placeholder="dd/mm/yy"
                    className="form-input"
                    ref="date"
                    type='text'
                    onChange={this.handleChange('date')}
                    required/>
                </label>
                  <label
                    className="form-label">Time:
                    <input
                      value={this.state.time}
                      placeholder="hh:mm am/pm"
                      className="form-input"
                      ref="time"
                      type='text'
                      onChange={this.handleChange('time')}
                      required/>
                  </label>
                      <label
                        className="form-label">Address:
                        <input
                          value={this.state.address}
                          placeholder="dd/mm/yy"
                          className="form-input"
                          ref="address"
                          type='text'
                          onChange={this.handleChange('address')}
                          required/>
                      </label>
                        <label
                          className="form-label">City, State and Zip,:
                          <input
                            value={this.state.city_state_zip}
                            placeholder="Like so New York, NY 10004"
                            className="form-input"
                            ref="city_state_zip"
                            type='text'
                            onChange={this.handleChange('city_state_zip')}
                            required/>
                        </label>
                        <button className="form-button">Create Event!</button>
          </form>
      </section>
    );
  }
}


const mapStateToProps = ( { session },ownProps) => {
  return {
    userId: session.currentUser.id
  };
};

const mapDispatchToProps = dispatch => ({
  createEvent: (event) => dispatch(createEvent(event)),
});



export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
