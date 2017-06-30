import React from 'react';
import { Link } from 'react-router-dom';

  const HomepageEventItem = ({ event, users, loggedIn, createBookmark, deleteBookmark}) => {

  const toggleBookmark = (e) => {
    e.stopPropegation;
    if (loggedIn ) {
      if (users.bookmarked_events.includes(event.id)) {
        deleteBookmark(event.id);
      } else {
        createBookmark(event.id);
      }
    }
  }



  return(
    <section className="homepage-event-item">

            <li className="event-index-item">
                <Link to={`/events/${event.id}`}>
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
                </Link>
                      <button className= "bookmarked-event-show"onClick={toggleBookmark}>
                      { loggedIn ? users.bookmarked_events.includes(event.id) ? <i className="fa fa-bookmark" aria-hidden="true"></i> :<i className="fa fa-bookmark-o" aria-hidden="true"></i> : null}
                      </button>
            </li>


    </section>

  );



  };

export default HomepageEventItem;
