/**
 * Created by leaves-27 on 17-01-20.
 */

import React from 'react';
import { Router,Route, IndexRoute,Redirect } from 'react-router';

import App from '../common/containers/app';
import List from '../common/containers/list/index';
import Login from '../common/containers/login/index';
import Detail from '../common/containers/detail/index';
import Backend from '../common/containers/backend/index';
import Register from '../common/containers/register/index';

export default (history) => {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute  component={ List } />
        <Route path="detail/:date" component={ Detail } />
        <Route path="login" component={ Login } />
        <Route path="backend" component={ Backend } />
        <Route path="register" component={ Register } />
      </Route>
    </Router>
  )
};


