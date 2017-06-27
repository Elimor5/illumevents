import React from 'react'

const EventTicketShowItem = ({ event_ticket }) => {
debugger
return(
  <section className="show-event-item">
        <span>{event_ticket.ticket_type}</span>
        <br/>
        <span>{event_ticket.max_quantity}</span>
        <br/>
        <span>{event_ticket.price}</span>
  </section>

);



};

export default EventTicketShowItem;
