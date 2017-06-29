import React from 'react';
import { Link } from 'react-router-dom';
import { months } from './date_parse';

  const BrowseEventItem = ({ event }) => {


  const parseDate = (date) => {
    return `${months[date.slice(5,7)]} ${date.slice(8,10)}, ${date.slice(0,4)}`;
  }

  return(
    <section className="homepage-event-item">
          <Link to={`/events/${event.id}`}>
            <li className="event-browse-item">
              <div>
              <img className ="homepage-events-img" src={event.image_url} />
               </div>
                <div className= "browse-event-placeholder">
                </div>

                <div className="browse-event-detail">
                  <div className="event-time-date">
                    <span className="home-event-item">{parseDate(event.date)}</span>
                    <span className="home-event-item">{event.time}</span>
                  </div>
                    <span className= "home-event-title ">{event.title} </span>
                    <span className="homepage-address">{event.address},</span>
                    <span>{event.venue}</span>
                </div>
            </li>
          </Link>
    </section>

  );



  };

export default BrowseEventItem;
