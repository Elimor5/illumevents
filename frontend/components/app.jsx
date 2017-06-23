import React from 'react';
import { Provider } from 'react-redux';
import Modal from './modal/modal';
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
      <Modal />
      <NavBarContainer />
    </header>
      <HashRouter>
        <section>
          <Route exact path="/" component={ HomePageContainer } />
          <ProtectedRoute exact path="/new" component={ CreateEvent } />
          <ProtectedRoute exact path="/edit/:id" component={ CreateEvent } />
          <Route path="/events/:id" component={ EventShow } />
          <AuthRoute exact path="/login" component= { SessionFormContainer }/>
          <AuthRoute exact path="/signup" component= { SessionFormContainer }/>
        </section>
      </HashRouter>
  </div>
);

export default App;
// <Switch>
//   < AuthRoute path="/login" component={SessionFormContainer} />
//   < AuthRoute path="/signup" component={SessionFormContainer} />
// </Switch>
