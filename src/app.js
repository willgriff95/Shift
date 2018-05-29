import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


import 'bulma';
import './scss/style.scss';

import Home from './components/Home';
import UsersEdit from './components/users/Edit';
import JobsIndex from './components/jobs/Index';
import JobsNew from './components/jobs/New';
import JobsShow from './components/jobs/Show';
import AuthLogin from './components/auth/Login';
import AuthRegister from './components/auth/Register';
import SecureRoute from './components/common/SecureRoute';
import FlashMessages from './components/common/FlashMessages';
import NotFound from './components/common/NotFound';
// import Auth from './lib/Auth';

class App extends React.Component {
  render() {
    return (
      <Router>
        <main>
          <section>
            <FlashMessages />
            <Switch>
              {/* Decorator component => the BrowserRouter decorates the component with useful stuff like location, match, history which can be accessed with this.props inside of each component */}
              <SecureRoute path="/users/:id" component={UsersEdit} />
              <SecureRoute path="/jobs/new" component={JobsNew} />
              <Route path="/jobs/:id" component={JobsShow} />
              <Route path="/jobs" component={JobsIndex} />
              <Route path="/register" component={AuthRegister} />
              <Route path="/login" component={AuthLogin} />
              <Route exact path="/" component={Home} />
              <Route component={NotFound} />
            </Switch>
          </section>
        </main>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
