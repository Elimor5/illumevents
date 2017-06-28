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
        <span>{event_ticket.ticket_type}</span>
        <br/>
        <span>{event_ticket.max_quantity}</span>
        <br/>
        <span>{event_ticket.price}</span>
        <select>
          { this.dropDownArray().map((num)=>
          <option value="{num}">{num}</option>
          )}
        </select>
      </section>
    );
  }

}



export default EventTicketShowItem;
