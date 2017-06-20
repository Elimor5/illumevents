import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  renderAuthLinks() {
    if (this.props.currentUser) {
      return (<button className="" onClick={this.props.logout}>Log Out</button>);
    } else {
        return (
          <nav className="">
            <div className= "nav-bar-item">
              <Link to="/login">Login</Link>
            </div>
              <div className= "nav-bar-item">
                <Link to="/signup">Sign up!</Link>
              </div>
          </nav>
        );
      }
  }

  render() {
    return (
      <section className= "nav-bar-container">

        <div className= "nav-bar-item">
          <Link to="/" className="header-link">
            <p>Illumevents</p>
          </Link>
        </div>
          <div className= "nav-bar-item">
            <p>(Search bar will go here)</p>
          </div>
            <div className= "nav-bar-item">
              {this.renderAuthLinks()}
            </div>


      </section>
    );
  }



}




export default NavBar;
