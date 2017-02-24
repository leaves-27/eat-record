/**
 * Created by leaves-27 on 17-01-20.
 */

import React from 'react';
import { Router,Route, IndexRoute,Redirect } from 'react-router';
import App from './containers/app';

import List from './containers/list/index';
import Login from './containers/login/index';
import Detail from './containers/detail/index';
import Backend from './containers/backend/index';

// const Login = (location, cb) => {
//   require.ensure([], require => {
//       cb(null,require('./containers/login/index').default)
//   },'/login')
// }

// const List = (location, cb) => {
//   require.ensure([], require => {
//       cb(null,require('./containers/list/index').default)
//   },'list')
// }

// const Detail = (location, cb) => {
//   require.ensure([], require => {
//       cb(null,require('./containers/detail/index').default)
//   },'detail')
// }

// const Backend = (location, cb) => {
//   require.ensure([], require => {
//       cb(null,require('./containers/backend/index').default)
//   },'/login')
// }

export default (history) => {
  return (
    <Router history={history}>
      <Route path="web" component={App}>
        <IndexRoute  component={ List } />
        <Route path="detail/:date" component={ Detail } />
        <Route path="login" component={ Login } />
        <Route path="backend" component={ Backend } />
      </Route>
    </Router>
  )
};