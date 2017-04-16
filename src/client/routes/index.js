/**
 * Created by leaves-27 on 17-01-20.
 */
import React from 'react';
import { Router,Route, IndexRoute,Redirect } from 'react-router';

import App from '../../common/containers/app';
import List from '../../common/containers/list';
import Login from '../../common/containers/login';
import Detail from '../../common/containers/detail';
import Backend from '../../common/containers/backend';

// const routeConfig = [{ 
//   path: 'web',
//   component: App,
//   indexRoute: { 
//     component: List 
//   },
//   childRoutes: [{ 
//     path: 'login', 
//     component: Login 
//   },
//   { 
//     path: 'detail/:date',
//     component: Detail
//   },
//   { 
//     path: 'backend',
//     component: Backend
//   }]
// }]

const routeConfig = {
  path: 'web',
  indexRoute:{
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../../common/containers/list').default)
      })
    }
  },
  component: require('../../common/containers/app').default,
  childRoutes: [
    require('./detail'),
    require('./backend'),
    require('./login'),
    require('./404')
  ]
}

export default (history) => {
  return (
    <Router history={history} routes={routeConfig} />
  )
};

