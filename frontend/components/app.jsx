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
import EventShow from './events/event_show';
import CreateEvent from './events/create_event';

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
      <HashRouter>
        <section>
          <Route exact path="/" component={ HomePageContainer } />
          <Route exact path="/events/:id" component={ EventShow } />
          <Route exact path="/events/new" component={ CreateEvent } />
        </section>
      </HashRouter>
  </div>
);

export default App;
// <Switch>
//   < AuthRoute path="/login" component={SessionFormContainer} />
//   < AuthRoute path="/signup" component={SessionFormContainer} />
// </Switch>
