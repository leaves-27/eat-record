/**
 * Created by leaves-27 on 17-01-20.
 */

import React from 'react';
import { Router,Route, IndexRoute,Redirect } from 'react-router';

const routes = {
  path: 'web',
  component: require('../../common/containers/app').default,
  childRoutes: [
    require('./list'),
    require('./detail'),
    require('./backend'),
    require('./login'),
    require('./404')
  ]
}

export default (history) => {
  return (
    <Router history={history} routes={routes} />
  )
};

