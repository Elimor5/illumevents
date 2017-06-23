import { connect } from 'react-redux';

import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import SessionModal from './session_modal';


const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  }
};

const mapDispatchToProps = (dispatch, { location, formType }) => {
  debugger
  // const modalOpen = location.pathname.slice(1) === 'login';
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    formType,
    modalOpen: false
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionModal);
