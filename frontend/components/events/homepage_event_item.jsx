import React from 'react';
import { Link } from 'react-router-dom';

  const HomepageEventItem = ({ event }) => {

  return(
    <Link to={`/events/${event.id}`}>
      <li className="event-index-item">

              <span>{event.title} </span>
              <br/>
              <span>{event.address}</span>
              <br/>
              <span>{event.city_state_zip}</span>
              <br/>
              <span>{event.date}</span>
              <br/>
              <span>{event.time}</span>
              <br/>
              <span>{event.ticket_price}</span>
              <br/>
              <span>{event.ticket_quantity}</span>
      </li>
    </Link>
  );



  };

export default HomepageEventItem;
