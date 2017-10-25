import React from 'react';
import HomepageEventItem from './homepage_event_item';
import ReactGA from 'react-ga';
import HomepageSlider from './homepage_slider';

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    ReactGA.initialize('UA-104443574-1');
    ReactGA.pageview(window.location.pathname);

  }

  componentDidMount(){
    this.props.clearFilters();
    this.props.requestEvents();
    if (this.props.loggedIn) {
      this.props.fetchUserInfo(this.props.userId);
    }
  }



  render(){
      const{ events, errors } = this.props;
    return(
    <section>
      <HomepageSlider />
        <div className="vertical-spacing"></div>
          <div className="center-heading">

            <h1> Trending Events Near You </h1>
          </div>
        <div className="homepage-outer-container">
          <div className="homepage-events">
            <ul className="events-container">
              {events.slice(0,9).map(event =>
                <HomepageEventItem
                key={event.id}
                event={event}
                createBookmark={this.props.createBookmark}
                deleteBookmark={this.props.deleteBookmark}
                loggedIn={this.props.loggedIn}
                users={this.props.users}/>)
              }
            </ul>
          </div>

        </div>

    </section>
    );
  }

}

export default Homepage;
