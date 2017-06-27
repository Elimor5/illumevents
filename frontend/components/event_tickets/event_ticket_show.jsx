import React from 'react';
import { connect } from 'react-redux';
import { fetchAllEventTickets } from '../../actions/event_ticket_actions';
import { Link } from 'react-router-dom'







const mapStateToProps = ({ events }, ownProps) => {
  return {
    event_id: events[ownProps.match.params.id]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllEventTickets: (event_id) => dispatch(fetchAllEventTickets(event_id))
});
