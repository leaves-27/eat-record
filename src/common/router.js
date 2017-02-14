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
import * as actions from './actions/index';

const auth = (state,replace,next) => {
  actions.loginValidationRequest(replace);
  next();
}

function login(login,location){
  console.log("browserHistory",browserHistory)
  if(login && login.data && login.data.code == 0){
    if(location.pathname.indexOf("login") > 0 ){
      if(location && location.query && location.query.redirectUrl){
        browserHistory.push(location.query.redirectUrl);
      }else{
        browserHistory.push("backend");
      }
    }
  }else{
    if(location.pathname.indexOf("login") < 0 ){
      browserHistory.push("login?redirectUrl="+location.query.redirectUrl);
    }
  }
}

const routes = () => {
  return (
    <Route path="web" component={App}>
      <IndexRoute  component={ List } />
      <Route path="detail/:id" component={ Detail } />
      <Route path="login" component={ Login } />
      <Route path="backend" component={ Backend } onEnter={ auth } />
    </Route>
  )
};


export default routes;