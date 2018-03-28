/**
 * Created by leaves-27 on 17-01-20.
 */

import React from 'react';
// import { Router } from 'react-router';

import App from '../../common/containers/app';
import { Router,Route, IndexRoute,Redirect } from 'react-router';


const routeConfig = {
  path : '/',
  indexRoute : {
    getComponent : (nextState, cb)=>{
      // require.ensure([],(require) => {
      //   cb(null,require('../../common/containers/list').default)
      // },'list')

      require.ensure([],(require) => {
        cb(null,require('../../common/containers/login').default)
      },'login')
    }
  },
  component : require('../../common/containers/app').default,
  childRoutes : [
    require('./login'),
    // require('./detail'),
    // require('./backend'),
    require('./register'),
    require('./404')
  ]
}

// const routeConfig = (
//   <Route path="/" component={App}>
//     <IndexRoute  getComponent={ (nextState, cb) =>{
//       require.ensure([], (require) => {
//           cb(null, require('../../common/containers/list').default)
//         },'list')
//       } 
//     } />
//     <Route path="detail/:date" getComponent={ 
//       (nextState, cb) =>{
//         require.ensure([], (require) => {
//           cb(null, require('../../common/containers/detail').default)
//         },'detail')
//       } 
//     } />
//     <Route path="login" getComponent={ 
//       (nextState, cb)=>{
//         require.ensure([], (require) => {
//           cb(null, require('../../common/containers/login').default)
//         },'login');
//       }
//     } />
//     <Route path="backend" getComponent={ (nextState, cb) =>{
//       require.ensure([], (require) => {
//           cb(null, require('../../common/containers/backend').default)
//         },'backend')
//       } 
//     } />
//   </Route>
// )

export default (history) => {
  return (
    <Router history={history} routes={routeConfig} />
  )
};

