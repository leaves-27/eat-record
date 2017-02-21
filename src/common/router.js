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

/*
** 对用户登陆情况进行验证：
** (1)若用户已登录，再看当前是在那个页面:
**    <1>若是在登录页面，则跳转到后台页面
**    <2>若是在其他页面，则进入当前页面
** (2)若未有登录，再看当前是在那个页面:
**    <1>若是在登录页面，则进入当前页面
**    <2>若是在其他页面，则跳转到登录页面
**/

// const auth = (state,replace,next)=>{
//   if(window.localStorage.getItem("status") == 1) {
//     if(state.location.pathname=="/web/login"){
//       replace('/web/backend');
//     }else{
//       next();
//     }
//   }else{
//     if(state.location.pathname=="/web/login"){
//       next();
//     }else{
//       replace('/web/login');
//     }
//   }
// }

const routes = (history) => {
  return (
    <Router history={history}>
      <Route path="web" component={App}>
        <IndexRoute  component={ List } />
        <Route path="detail/:id" component={ Detail } />
        <Route path="login" component={ Login } />
        <Route path="backend" component={ Backend } />
      </Route>
    </Router>
  )
};

export default routes;