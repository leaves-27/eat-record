import React from 'react';
import { render } from "react-dom";
import { Provider } from 'react-redux';
import { match,browserHistory} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import about from './reducer/index';
import middlewareConfig from './middleware-config';
import createRoutes from './routes';

import css from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import stylus from './index.styl';

import $ from 'jquery'
import 'bootstrap';

const store = middlewareConfig(about,window.__INITIAL_STATE__);

/*
  ** 请求成功后发生跳转的情况一般为：
  ** 1.登录成功后；
  ** 2.接口请求数据时返回当前未登录。
  ** 3.退出登录时；
  **
  ** 登录成功后跳转的情况，一般有两种：
  ** 1.url没有任何需要跳转到的地址。
  ** 2.url中含有redirectUrl的情况。
  **
  ** 接口请求数据时返回当前未登录：
  ** 未登录的情况下，返回值code为4。
  **/
store.subscribe(function(){
  const state = store.getState();
  const location = state.routing.locationBeforeTransitions;

  if(state.login.status==1) {
    if(location.pathname=="/login"){
      let redirectUrl = "/backend";

      if(location.query && location.query.redirectUrl){
        redirectUrl = location.query.redirectUrl;
      }

      browserHistory.push({
        pathname:redirectUrl
      });
    }
  }else{
    if(location.pathname!="/login" && location.pathname!="/register"){
      let redirectUrl = "/login";
      browserHistory.push({
        pathname : redirectUrl,
        query:{
          redirectUrl : location.pathname
        }
      });
    }else{
      if(state.register && state.register.status && state.register.status==1) {
        let redirectUrl = "/login";
        browserHistory.push({
          pathname:redirectUrl
        });
      }
    }
  }
});

const history = syncHistoryWithStore(browserHistory,store);
render(
  <Provider store={store}>
    { createRoutes(history) }
  </Provider>,
  document.getElementById('root')
)
