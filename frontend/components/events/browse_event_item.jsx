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
                <img className ="browse-events-img" src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F28289286%2F178038225347%2F1%2Foriginal.jpg?h=230&w=460&rect=0%2C8%2C706%2C353&s=fd0837b64033ae8739eb8d189e5a9660"></img>
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
