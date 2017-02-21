import React from 'react';
import { renderToString } from 'react-dom/server';
import { match , RouterContext } from 'react-router';
import { createLocation,createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';

import middlewareConfig from '../common/middleware-config';
import createRoutes from '../common/router';
import pageRouter from './page-router';
import * as page  from './page';
import about from '../common/reducer/index';

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
      console.log("renderProps:",renderProps);

      const store = middlewareConfig(about,{});
      console.log("store1:",store);
      store.subscribe(function(){
        console.log("我执行了");
        const state = store.getState();
        const __html__ = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        );

        res.status(200).end(page.main(__html__,state));
      });
      console.log("store2:",store);

      const action = pageRouter(renderProps);
      console.log("action:",action);
      store.dispatch(action);
      
    }else{
      res.status(404).end('Not found');
    }
  });
}