import React from 'react';
import { Provider } from 'react-redux';
import Modal from './modal/modal';
import Footer from './footer.jsx';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session_form/session_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import HomePageContainer from './events/homepage_container';
import EventShow from './events/event_show';
import CreateEvent from './events/create_event';
import BrowseEvents from './browse_events/browse_events';
import UserDashboard from './user_dashboard/user_dashboard';


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
          <ProtectedRoute path="/events/:id" component={ EventShow } />
          <ProtectedRoute exact path="/dashboard" component={ UserDashboard } />
        </section>
      </HashRouter>
    <Footer />  
  </div>
);

export default App;
