import React from 'react';
import HomepageEventItem from './homepage_event_item';


class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestEvents();

    if (this.props.loggedIn) {
      this.props.fetchUserInfo(this.props.userId);
    }

  }

  render(){
      const{ events, errors } = this.props
    return(
    <section>
      <div className= "splash-container">
      <img className="splash-image" src="https://static.pexels.com/photos/154147/pexels-photo-154147.jpeg"/>
      </div>
        <div className="vertical-spacing"></div>
          <div className="center-heading">

            <h1> Trending Events Near You </h1>
          </div>
        <div className="homepage-outer-container">
          <div className="homepage-events">
            <ul className="events-container">
              {events.slice(0,9).map(event =>
                <HomepageEventItem key={event.id} event={event} />)
              }
            </ul>
          </div>

        </div>
        <div className="footer"></div>

    </section>
    );
  }

}

export default Homepage;
