/**
 * Created by leaves-27 on 17-01-20.
 */

import React from 'react';
import App from '../containers/app';
import { Router,Route, IndexRoute,Redirect } from 'react-router';

const routeConfig = {
  path : '/',
  getIndexRoute (location, callback){
    require.ensure([],function (require) {
      callback(null,{
        component : require('../containers/login').default
      })
    },'login')
  },
  getComponents(location, callback) {
    require.ensure([], function (require) {
      callback(null,require('../containers/app').default)
    })
  },
  getChildRoutes(location, callback){
    require.ensure([],function (require) {
      callback(null, [
        require('./login'),
        require('./detail'),
        require('./backend'),
        require('./register'),
        require('./404')
      ])
    })
  } 
}

export default (history) => {
  return (
    <Router history={history} routes={routeConfig} />
  )
};

