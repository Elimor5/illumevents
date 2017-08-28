import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      formType: this.props.formType,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navLink = this.navLink.bind(this);
    this.toggleSignUp = this.toggleSignUp.bind(this);
    this.demoLogIn = this.demoLogIn.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
      this.props.fetchUserInfo(nextProps.userId);
    }
  }

  demoLogIn() {
    this.props.loginUser({ user: {username: "username", password: "password"}}).then(
      () => this.props.hideModal());
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const handleAction = this.state.formType === "login" ? this.props.loginUser : this.props.signupUser;
    const user = this.state;
    handleAction({user}).then(
      () => this.props.hideModal());
    }

  hideModal() {
    this.props.hideModal();
    this.props.clearErrors();
  }

  toggleSignUp() {
    this.state.formType === 'login' ?
    this.setState({formType: 'signup'}) :
    this.setState({formType: 'login'});
    this.props.clearErrors();
  }



  navLink() {
    if (this.state.formType === 'login') {
      return <button className="button" onClick={this.toggleSignUp}>sign up</button>;
    } else {
      return <button className="button" onClick={this.toggleSignUp}>log in </button>;
    }
  }

  renderErrors() {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li className="error-handle" key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
  }

  render() {
    return (
      <section className="session-modal-container">
        <div className="close-session-modal">
          <Link to="/">
          <button className="close-button" onClick={this.hideModal}>x</button>
          </Link>
        </div>
        <div>

          <div className="session-modal-form-container">
            <h1 className="session-form-logo">I</h1>
            <h1 className="session-modal-greeting">Let's get started</h1>
            <h2 className="session-modal-form-signup-login">
              Enter your email to {this.state.formType} or {this.navLink()}
            </h2>
          </div>
            <form onSubmit={this.handleSubmit} className="login-form-box">

              <br/>


                {this.renderErrors()}
                <div className="login-form">
                  <br/>
                  <label className="login-form-email-pw">Email Address</label>
                  <br />
                    <input type="text"
                      value={this.state.username}
                      onChange={this.update('username')}
                      placeholder="Enter email"
                      className="login-input"
                    />

                  <br/>
                  <label className="login-form-email-pw">Password</label>
                    <br />
                    <input type="password"
                      value={this.state.password}
                      onChange={this.update('password')}
                      placeholder="Enter password"
                      className="login-input"
                    />

                  <br/>
                  <input className="session-submit" type="submit" value="Get Started" />
                </div>
            </form>
            <button className="demo-button" onClick={this.demoLogIn}> DEMO </button>

        </div>
      </section>
    );
  }
}

export default withRouter(SessionForm);
