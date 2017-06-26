import { connect } from 'react-redux';
import React from 'react';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { hideModal } from '../../actions/modal_actions';


const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const processForm = (ownProps.formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    hideModal: () => dispatch(hideModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
