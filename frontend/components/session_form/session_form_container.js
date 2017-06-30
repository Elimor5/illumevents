import { connect } from 'react-redux';
import React from 'react';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { hideModal } from '../../actions/modal_actions';
import { fetchUserInfo } from '../../actions/user_actions';


const mapStateToProps = ({ session }) => {

  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
    userId: Boolean(session.currentUser) ? session.currentUser.id : 0,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  
  const processForm = (ownProps.formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    hideModal: () => dispatch(hideModal()),
    fetchUserInfo: (id) => dispatch(fetchUserInfo(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
