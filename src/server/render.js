import React from 'react';
import { renderToString } from 'react-dom/server';
import { match , RouterContext } from 'react-router';
import { createMemoryHistory,createHistory,useBasename } from 'history'

import { Provider } from 'react-redux';
import { combineReducers } from 'redux';

import routes from '../common/router';
import { about } from '../common/reducer/index';

import middlewareConfig from '../common/middleware-config';

// let appHistory  = useBasename(createHistory)({
//   basename: '/web'
// })

export function render(req,res,next,initState){
  
  const store = middlewareConfig(about,initState);
  const state = store.getState();
  
  match({
    routes: routes(state),
    location: req.url
  },function(err, redirectLocation, renderProps){
    if(err){
      res.status(500).end(`Internal Server Error ${err}`);
    }else if(redirectLocation){
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    }else if(renderProps){
      const html = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      );

      res.render('index',{
        __html__: html,
        __state__: JSON.stringify(state)
      });
    }else{
      res.status(404).end('Not found');
    }
  });
}