import React from 'react';
import { Link } from 'react-router-dom';

  const HomepageEventItem = ({ event }) => {

  return(
    <section className="homepage-event-item">
          <Link to={`/events/${event.id}`}>
            <li className="event-index-item">

                <img className ="homepage-events-img" src={event.image_url} />
                  <div className="homepage-event-date-time">
                    <span className="home-event-item">{event.date}</span>
                    <span className="home-event-item">{event.time}</span>
                  </div>
                    <span className= "home-event-title ">{event.title} </span>
                      <div className="homepage-event-address">
                        <span className="homepage-address">{event.address},</span>
                        <span>{event.city_state_zip.slice(0,(event.city_state_zip.length)-6)}</span>
                      </div>
            </li>
          </Link>
    </section>

  );



  };

export default HomepageEventItem;
