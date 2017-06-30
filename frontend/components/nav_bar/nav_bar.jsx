import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session_form/session_form_container';
import { showModal } from '../../actions/modal_actions';




class NavBar extends React.Component {
  constructor(props) {
    super(props);

  this.demoLogIn = this.demoLogIn.bind(this);
  }

  renderAuthLinks() {
    if (this.props.currentUser) {
      return (
        <div className="auth-item-split">
          <Link className="nav-button nav-bar-item-user auth-bar-nav" to="/dashboard">{this.props.currentUser.username}</Link>
          <Link to="/">
          <button className="nav-button auth-bar-nav" onClick={this.props.logout}>LOG OUT</button>
          </Link>
        </div>
      );
    } else {

        return (
          <div className="auth-item-split">

            <button className="nav-button nav-bar-item auth-bar-nav signup-nav" onClick={this.props.showSignUpModal}>
              SIGN UP
            </button>
            <button className="nav-button nav-bar-item auth-bar-nav " onClick={this.props.showLogInModal}>
              LOG IN
            </button>
            <button className="nav-button auth-bar-nav auth-bar-nav-demo" onClick={this.demoLogIn}> DEMO </button>
          </div>
        );
      }
  }
  demoLogIn() {
    this.props.login({ user: {username: "username", password: "password"}})
    // .then(this.history.push('/'))
  }

  render() {
    return (
      <section className= "nav-bar-container">

        <section>
          <div className= "nav-bar-item">
            <Link to="/" >
              <p className="logo">Illumevents</p>
            </Link>
          </div>
          </section>
            <div className="search-bar-item">
              
            </div>

            <section className="right-side-nav">
            <div className="nav-bar-item">
              <Link to="/browse" className="nav-button nav-bar-item browse-bar-nav">BROWSE EVENTS</Link>
            </div>
              <section className="auth-item-split">
                <div className= "nav-bar-item">
                  {this.renderAuthLinks()}
                </div>
                  <div className="nav-bar-item ">
                    <Link to="/new">
                      <p className="nav-button event-bar-nav"> CREATE EVENT </p>
                    </Link>
                  </div>
              </section>
            </section>
      </section>
    );
  }



}




export default NavBar;
