import React from 'react';
import { Link } from 'react-router-dom';
import { months } from './date_parse';

  const BrowseEventItem = ({ event }) => {


  const parseDate = (date) => {
    return `${months[date.slice(5,7)]} ${date.slice(8,10)}, ${date.slice(0,4)}`;
  }
  debugger
  return(
    <section className="homepage-event-item">
          <Link to={`/events/${event.id}`}>
            <li className="event-browse-item">
              <div>

              <img className ="browse-events-img" src={event.image_url} />
               </div>
                <div className= "browse-event-placeholder">
                </div>

                <div className="browse-event-detail">
                <div className="indent">
                </div>
                  <div className="event-time-date">
                    <span className="browse-event-item">{parseDate(event.date)}</span>
                    <span className="browse-event-item space">{event.time}</span>
                  </div>
                    <span className= "browse-event-title ">{event.title} </span>
                        <span className="event-browse-venue">{event.venue}</span>
              

                </div>
            </li>
          </Link>
    </section>

  );



  };

export default BrowseEventItem;
