/**
 * Created by leaves-27 on 17-01-20.
 */

import React from 'react';
// import { Router } from 'react-router';

import App from '../containers/app';

import { requireComponent } from '../utils';
import { Router,Route, IndexRoute,Redirect } from 'react-router';

const routeConfig = {
  path : '/',
  indexRoute : {
    getComponent : (nextState, cb)=>{
      requireComponent(cb,'../containers/list','list')
      console.log("_SERVER_：",_SERVER_)
      // if(_SERVER_) {
      //   console.log("i am server")
      //   cb(null, require('../containers/list').default)
      // }else{
      //   require.ensure([], (require) => {
      //     cb(null, require('../containers/list').default)
      //   },'list')
      // }
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


export default (history) => {
  return (
    <Router history={history} routes={routeConfig} />
  )
};

