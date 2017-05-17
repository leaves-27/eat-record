/**
 * Created by leaves-27 on 17-01-20.
 */

import React from 'react';
// import { Router } from 'react-router';

import App from '../../common/containers/app';

import { requireComponent } from '../../common/utils';
import { Router,Route, IndexRoute,Redirect } from 'react-router';


const routeConfig = {
  path : '/',
  indexRoute : {
    getComponent : (nextState, cb)=>{
      requireComponent(cb,'../../common/containers/list','list')
      // if(_SERVER_) {
      //   cb(null,require('../../common/containers/list').default)
      // }else{
      //   require.ensure([],(require) => {
      //     cb(null,require('../../common/containers/list').default)
      //   },'list')
      // }
    }
  },
  component : require('../../common/containers/app').default,
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

