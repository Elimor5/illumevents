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
import BrowseEvents from './events/browse_events';


const App = () => (
  <div className="app">
    <header>
      <Modal />

    </header>
    <NavBarContainer />
      <HashRouter>
        <section>
          <Route exact path="/browse" component={ BrowseEvents } />
          <Route exact path="/" component={ HomePageContainer } />
          <ProtectedRoute exact path="/new" component={ CreateEvent } />
          <ProtectedRoute exact path="/edit/:id" component={ CreateEvent } />
          <Route path="/events/:id" component={ EventShow } />

        </section>
      </HashRouter>
  </div>
);

export default App;
// <Switch>
//   < AuthRoute path="/login" component={SessionFormContainer} />
//   < AuthRoute path="/signup" component={SessionFormContainer} />
// </Switch>
//
// <AuthRoute exact path="/login" component= { SessionFormContainer }/>
// <AuthRoute exact path="/signup" component= { SessionFormContainer }/>
