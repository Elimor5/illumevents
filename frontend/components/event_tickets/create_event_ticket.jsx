import { connect } from 'react-redux';
import React from 'react';
// import { createEventTicket, fetchSingleEventTicket, } from '../../actions/event_ticket_actions';

class CreateEventTicket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticket_type: "",
      price: "",
      max_quantity: ""
    };
  }

  handleChange(property) {
    return(e) => {
      this.setState({
        [property]: e.target.value
      });
    };
  }

  render() {
    return(
    <section>
       <form className ="ticket-form">
         <input
           value={this.state.ticket_type}
           placeholder="What type of ticket?"
           className="ticket-form-input-char"
           ref="ticket_type"
           type='text'
           onChange={this.handleChange('ticket_type')}
           required/>

           <input
             value={this.state.max_quantity}
             placeholder="100"
             className="ticket-form-input-int"
             ref="max_quantity"
             type='text'
             onChange={this.handleChange('max_quantity')}
             required/>

             <input
               value={this.state.price}
               placeholder="100"
               className="ticket-form-input-int"
               ref="price"
               type='text'
               onChange={this.handleChange('price')}
               required/>

       </form>
    </section>
    );
  }
}


export default CreateEventTicket;











// const mapStateToProps = ( { events, session },ownProps) => {
//   return {
//     userId: session.currentUser.id,
//     event: events[ownProps.match.params.id] || {}
//   };
// };
//
// const mapDispatchToProps = dispatch => ({
//   createEvent: (event) => dispatch(createEvent(event)),
//   fetchSingleEvent: (id) => dispatch(fetchSingleEvent(id)),
//   updateEvent: (event) => dispatch(updateEvent(event))
// });
//
//
//
// export default connect(mapStateToProps, mapStateToProps)(CreateEventTicket);
