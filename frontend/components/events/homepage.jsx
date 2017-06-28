import React from 'react';
import HomepageEventItem from './homepage_event_item';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestEvents();
  }

  render(){
      const { events, errors } = this.props;
    return(
    <section>
      <div className= "spash-container"></div>
        <div className="homepage-outer-container">
          <div className="homepage-events">
            <ul className="events-container">
              {events.map(event =>

                <HomepageEventItem key={event.id} event={event} />)
              }
            </ul>
          </div>
        </div>


    </section>
    );
  }

}

export default Homepage;
