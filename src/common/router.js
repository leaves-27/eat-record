/**
 * Created by leaves-27 on 17-01-20.
 */

import React from 'react';
import { Route, IndexRoute,Redirect } from 'react-router';

import App from './containers/app';
import List from './containers/list/index';
import Detail from './containers/detail/index';
import Backend from './containers/backend/index';

//import { loginRequireAuth } from '../auth/loginAuth';

const routes = () => {
  return (
    <Route path="web" component={App}>
      <IndexRoute  component={ List } />
      <Route path="detail/:id" component={ Detail } />
      <Route path="backend" component={ Backend } />
    </Route>
  )
};


export default routes;