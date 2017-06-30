import React from 'react';
import { Link } from 'react-router-dom';


export const TicketItem = ({ ticket }) => {


  return(
    <section className="homepage-event-item">
          <Link to={`/events/${ticket.ticket_event.id}`}>
            <li className="event-browse-item">
            <div>
              <img className ="browse-events-img" src={ticket.event_image_url} />
             </div>
                <div className="title-indent"></div>
                <div className="browse-event-detail">

                  <div className="indent"></div>
                    <div className="event-time-date">
                      <span className="ticket-event-item">{"Ticket Price: $" + ticket.price}</span>
                      <div className= "title-event-placeholder"></div>
                    </div>

                      <span className= "ticket-event-title ">{ticket.ticket_event.title} </span>
                          <span className="event-ticket-venue">{ticket.ticket_type}</span>
                </div>
            </li>
          </Link>
    </section>

  );
}
