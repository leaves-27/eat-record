/**
 * Created by leaves-27 on 17-01-20.
 */

import React from 'react';
import { Route, IndexRoute,Redirect } from 'react-router';

import App from './containers/app';
import List from './containers/list/index';
import Detail from './containers/detail/index';
import Backend from './containers/backend/index';
import Login from './containers/login/index';

//import { loginRequireAuth } from '../auth/loginAuth';

const requireAuth = (state, replace) => {
  console.log("flag:",state.entries["login"].flag);
  if(!state.entries["login"].flag){
    replace({ pathname: 'login' });
  }
}

const routes = () => {
  return (
    <Route path="web" component={App}>
      <IndexRoute  component={ List } />
      <Route path="detail/:id" component={ Detail } />
      <Route path="login" component={ Login } />
      <Route path="backend" component={ Backend } onEnter={ requireAuth } />
    </Route>
  )
};


export default routes;