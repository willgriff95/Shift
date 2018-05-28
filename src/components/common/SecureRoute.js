import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from '../../lib/Auth';
import Flash from '../../lib/Flash';

// component is made capital because or else React will think it's just a normal HTML DOM element.
const SecureRoute = ({ component: Component, ...rest}) => {
  !Auth.isAuthenticated() && Flash.setMessage('danger', 'You must be logged in.');
  return (
    // This `render` prop is used to do some logic before we decide which component to render. Whatever we return from `render` will get rendered to the page. `props` gives history, location and match, which is spread onto this component. We are decorating that component.
    <Route {...rest} render={props =>
      Auth.isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    } />
  );
};

export default SecureRoute;
