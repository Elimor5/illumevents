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
      <ul>
        {events.map(event =>
          <HomepageEventItem key={event.id} event={event} />)
        }
      </ul>
    </section>
    );
  }

}

export default Homepage;
