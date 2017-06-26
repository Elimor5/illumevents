import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session_form/session_form_container';
import { showModal } from '../../actions/modal_actions';




class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  renderAuthLinks() {
    if (this.props.currentUser) {
      return (
        <div className="auth-item-split">
          <Link className="nav-button nav-bar-item auth-bar-nav" to="/">{this.props.currentUser.username}</Link>
          <button className="nav-button auth-bar-nav" onClick={this.props.logout}>LOG OUT</button>
        </div>
      );
    } else {

        return (
          <div className="auth-item-split">
            <button className="nav-button nav-bar-item auth-bar-nav" onClick={this.props.showSignUpModal}>
              SIGN UP
            </button>
            <button className="nav-button auth-bar-nav " onClick={this.props.showLogInModal}>
              LOG IN
            </button>
          </div>
        );
      }
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
              <p className="search-bar">(Search bar will go here)</p>
            </div>


            <section className="right-side-nav">
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
