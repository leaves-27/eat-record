/**
 * Created by leaves-27 on 17-01-20.
 */

import React from 'react';
import { Router,Route, IndexRoute,Redirect } from 'react-router';

import App from '../containers/app';

import { requireComponent } from '../utils';

const routeConfig = {
  path : '/',
  indexRoute : {
    getComponent : (nextState, cb)=>{
      requireComponent(cb,'../containers/list','list')
      console.log("_SERVER_：",_SERVER_)
    }
  },
  component : require('../containers/app').default,
  childRoutes : [
    require('./login'),
    require('./detail'),
    require('./backend'),
    require('./register'),
    require('./404')
  ]
}

let router = null;

if(_SERVER_){
  router = (
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
}else{
  router = (
    <Router history={history} routes={routeConfig} />
  )
}

export default (history) => {
  return router;
};

