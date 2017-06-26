import React from 'react';
import { Link } from 'react-router-dom';

  const HomepageEventItem = ({ event }) => {

  return(
    <section className="homepage-event-item">
          <Link to={`/events/${event.id}`}>
            <li className="event-index-item">

                <img className ="homepage-events-img" src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F28289286%2F178038225347%2F1%2Foriginal.jpg?h=230&w=460&rect=0%2C8%2C706%2C353&s=fd0837b64033ae8739eb8d189e5a9660"></img>

                    <span>{event.title} </span>

                    <span>{event.address}</span>

                    <span>{event.city_state_zip}</span>

                    <span>{event.date}</span>

                    <span>{event.time}</span>

                    <span>{event.ticket_price}</span>
                
                    <span>{event.ticket_quantity}</span>
            </li>
          </Link>
    </section>

  );



  };

export default HomepageEventItem;
