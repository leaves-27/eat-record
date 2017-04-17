import React from 'react';
import { renderToString } from 'react-dom/server';
import { match , RouterContext } from 'react-router';
import { createLocation,createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import jwt from 'jwt-simple';

import middlewareConfig from '../common/middleware-config';
import createRoutes from './reate-routes';
import pageRouter from './page-router';
import * as page  from './page';
import about from '../common/reducer/index';
import * as actionType from '../common/actions/index';

export default (req,res,next)=>{
  const routes = createRoutes(createMemoryHistory());
  const location = createLocation(req.url);
  
  match({
    routes: routes,
    location: location
  },function(err, redirectLocation, renderProps){
    if(err){
      res.status(500).end(`Internal Server Error ${err}`);
    }else if(redirectLocation){
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    }else if(renderProps){
      const store = middlewareConfig(about);
      const action = pageRouter(renderProps);
      
      let status = 0;
      
      let token = (req.body && req.body.token) || (req.query && req.query.token) || req.headers['x-access-token'];
      
      if(token){
        let decoded = jwt.decode(token,req.app.get('jwtTokenSecret'));
        if(decoded.exp <= Date.now()) {
          status = 0;
        }else{
          status = 1;
          store.dispatch(actionType.updateToken(token));
        } 
      }else{
        status = 0;
      };

      store.dispatch(actionType.setLoginStatus(status));

      store.subscribe(function(){
        const state = store.getState();

        if(state.login.status==1) {
          if(location.pathname=="/login"){
            //登录成功后，跳转到创建文章页面或跳转到相应页面
            let redirectUrl = "/backend";
            if(location.query && location.query.redirectUrl){
              redirectUrl = location.query.redirectUrl;
            }

            res.redirect(redirectUrl);
          }
        }else{
          if(location.pathname!="/login"){
            res.redirect("/login");
          }
        }

        const __html__ = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        );

        var cont = page.main(__html__,state);
        res.status(200).end(cont);
      });

      store.dispatch(action);
    }else{
      res.status(404).end('Not found');
    }
  });
}