import React from 'react'

class EventTicketShowItem extends React.Component {
  constructor(props) {
    super(props);
  }

  dropDownArray() {
    const end_num = this.props.event_ticket.max_quantity;
    const numsArray = []
      let current_num = 0;
      while (current_num <= 20 && current_num <= end_num ) {
        numsArray.push(current_num)
        current_num++
      }
      return numsArray
  }


  render() {
    const { event_ticket } = this.props
    return(
      <section className="show-event-item">
        <div className="show-event-item-type-price">
          <span className="show-ticket-type"> Ticket Type: {event_ticket.ticket_type}</span>
          <span className="show-ticket-price">Price: ${event_ticket.price} (+ 5.65 FEE)</span>
        </div>
          <div className="show-event-ticket-dropdown">
            <select className="show-ticket-dropdown">
              { this.dropDownArray().map((num)=>
              <option value="{num}">{num}</option>
              )}
            </select >
            <span className="show-ticket-price">Amount Remaining:  {event_ticket.max_quantity}</span>
          </div>



      </section>
    );
  }

}



export default EventTicketShowItem;
