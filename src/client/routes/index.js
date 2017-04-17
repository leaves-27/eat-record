/**
 * Created by leaves-27 on 17-01-20.
 */

import React from 'react';
import { Router } from 'react-router';

const routeConfig = {
  path : '/',
  indexRoute : {
    getComponent : (nextState, cb)=>{
      require.ensure([],(require) => {
        cb(null,require('../../common/containers/list').default)
      },'list')
    }
  },
  component : require('../../common/containers/app').default,
  childRoutes : [
    require('./login'),
    require('./detail'),
    require('./backend'),
    require('./404')
  ]
}

export default (history) => {
  return (
    <Router history={history} routes={routeConfig} />
  )
};

