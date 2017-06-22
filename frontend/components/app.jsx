import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

// import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import HomePageContainer from './events/homepage_container';

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
    <HomePageContainer />
  </div>
);

export default App;
// <Switch>
//   < AuthRoute path="/login" component={SessionFormContainer} />
//   < AuthRoute path="/signup" component={SessionFormContainer} />
// </Switch>
