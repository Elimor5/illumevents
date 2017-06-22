import React from 'react';
// import { Link } from 'react-router-dom';

const HomepageEventItem = () => (
  <li className="event-index-item">
        <span>{event.title} </span>
        <span>{event.address}</span>
        <span>{event.city_state_zip}</span>
        <span>{event.date}</span>
        <span>{event.time}</span>
        <span>{event.ticket_price}</span>
        <span>{event.ticket_quantity}</span>
  </li>
);

export default HomepageEventItem;
