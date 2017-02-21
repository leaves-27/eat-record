import React from 'react';
import { renderToString } from 'react-dom/server';
import { match , RouterContext } from 'react-router';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';

import middlewareConfig from '../common/middleware-config';
import createRoutes from '../common/router';
import { pageRouter } from './page-router';
import * as page  from './page';
import { about } from '../common/reducer/index';

export const web=(req,res,next)=>{
  const history = createMemoryHistory();
  const routes = createRoutes(history);
  const location = history.createLocation(req.url);
  
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
        const __html__ = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        );

        res.status(200).end(page.main(__html__,state));
      });
      store.dispatch(pageRouter(renderProps));
      
    }else{
      res.status(404).end('Not found');
    }
  });
}