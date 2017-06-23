import { connect } from 'react-redux';
import { showModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import React from 'react';
import NavBar from './nav_bar';
import SessionFormContainer from '../session_form/session_form_container';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  showSignInModal: () => dispatch(showModal(<SessionFormContainer />))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
