import { connect } from 'react-redux';
import React from 'react';
import { fetchSingleEvent } from '../../actions/event_actions';

class EventShow extends React.Component {

  componentDidMount() {

    this.props.fetchSingleEvent(this.props.match.params.id);
  }

  render() {
    debugger
    if (this.props.event)
    return (
      <div>
        <section className="show-page">
          <h1>{this.props.event.title}</h1>
        </section>
      </div>
    );
    else {
      return null;
    }
  }
}


const mapStateToProps = ({ events }, ownProps) => {
  debugger
  return {

    event: events[ownProps.match.params.id]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSingleEvent: (id) => dispatch(fetchSingleEvent(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);
