import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navLink = this.navLink.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link className="link" to="/signup">sign up</Link>;
    } else {
      return <Link className="link" to="/login">log in </Link>;
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <section className="session-modal-container">
        <div>
          <div className="session-modal-form-container">
            <h1 className="session-modal-greeting">Let's get started</h1>
          </div>
            <form onSubmit={this.handleSubmit} className="login-form-box">

              <br/>

              <h2 className="session-modal-form-signup-login">
                Enter your email to {this.props.formType} or {this.navLink()}
              </h2>
                {this.renderErrors()}
                <div className="login-form">
                  <br/>
                  <label>Username:
                    <input type="text"
                      value={this.state.username}
                      onChange={this.update('username')}
                      className="login-input"
                    />
                  </label>
                  <br/>
                  <label>Password:
                    <input type="password"
                      value={this.state.password}
                      onChange={this.update('password')}
                      className="login-input"
                    />
                  </label>
                  <br/>
                  <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
      </section>
    );
  }
}

export default withRouter(SessionForm);
