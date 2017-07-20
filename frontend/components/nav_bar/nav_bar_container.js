import { connect } from 'react-redux';
import { showModal } from '../../actions/modal_actions';
import { login, logout } from '../../actions/session_actions';
import React from 'react';
import NavBar from './nav_bar';
import SessionFormContainer from '../session_form/session_form_container';
import { fetchUserInfo } from '../../actions/user_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
  showLogInModal: () => dispatch(showModal(<SessionFormContainer formType="login"/>)),
  showSignUpModal: () => dispatch(showModal(<SessionFormContainer formType="signup"/>)),
  fetchUserInfo: (id) => dispatch(fetchUserInfo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
