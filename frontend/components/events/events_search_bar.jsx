import React from 'react';

class EventsSearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="homepage-search-bar-container-outer">
        <div className="homepage-search-bar-container-inner">
          <div className="homepage-search-bar-banner-container">
            <h2 className="homepage-search-bar-banner">
              Find your next experience
            </h2>
          </div>
          <div className="homepage-search-bar-bars-container">
            <input className="homepage-search-bar-input"></input>
            <input className="homepage-search-bar-input"></input>
            <input className="homepage-search-bar-input"></input>
            <button className="homepage-search-bar-button">SEARCH</button>
          </div>
        </div>
      </div>
    );
  }
}

export default EventsSearchBar;
