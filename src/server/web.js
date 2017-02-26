import React from 'react';
import { renderToString } from 'react-dom/server';
import { match , RouterContext } from 'react-router';
import { createLocation,createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';

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
      store.subscribe(function(){
        const state = store.getState();

        if(state.login.status==1) {
          if(location.pathname=="/web/login"){
            //登录成功后，跳转到创建文章页面或跳转到相应页面
            let redirectUrl = "/web/backend";
            console.log("location:",location);
            if(location.query && location.query.redirectUrl){
              redirectUrl = location.query.redirectUrl;
            }

            res.redirect(redirectUrl);
          }
        }else{
          if(location.pathname!="/web/login"){
            res.redirect("/web/login");
          }
          // res.redirect(location.pathname+"?redirectUrl="+location.query.redirectUrl);
        }

        const __html__ = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        );

        res.status(200).end(page.main(__html__,state));
      });

      const action = pageRouter(res,store,renderProps);

      let status = 0;
      if(req.session.user){
        status = 1;
      };
      
      store.dispatch(actionType.setLoginStatus(status));
      store.dispatch(action);
      
    }else{
      res.status(404).end('Not found');
    }
  });
}