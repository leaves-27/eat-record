import React from 'react';
import { renderToString } from 'react-dom/server';
import { match , RouterContext } from 'react-router';
import { createLocation,createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import jwt from 'jwt-simple';

import middlewareConfig from '../common/middleware-config';
import createRoutes from '../common/routes';
import * as page  from './page';
import about from '../common/reducer/index';
import * as actionType from '../common/actions/index';
import imgs57 from '../common/imgs/icon-57.jpg'
import imgs72 from '../common/imgs/icon-72.jpg'
import imgs114 from '../common/imgs/icon-114.jpg'
import imgs144 from '../common/imgs/icon-144.jpg'

const runFetchData = (renderProps)=>{
  const route = renderProps.routes[renderProps.routes.length - 1];
  const state = this.store.getState();

  let taskList = [];

  renderProps.components.forEach((component,idx)=>{
    if(component && component.WrappedComponent && component.WrappedComponent.fetchData) {
      try{
        let fetchData = component.WrappedComponent.fetchData(state,this.store.dispatch);
        // if(typeof fetchData === "object" && fetchData.promise) {
        //   taskList.push(fetchData.always(()=>{
        //     console.log("fetchData done from:" + component.displayName)
        //   }))
        // }
      }catch(e){
        console.log("error when fetchData from:" + component.displayName + ":" + e)
      }
    }
  });

  // return $.whenAll.apply(null,taskList);
}

export default (req,res,next)=>{
  const routes = createRoutes(createMemoryHistory());
  // const location = createLocation(req.url);
  console.log("createRoutes:",createRoutes);
  console.log("routes:",routes);

  match({
    routes: routes,
    location: req.url
  },function(err, redirectLocation, renderProps){
    console.log("err:",err);
    console.log("redirectLocation:",redirectLocation);
    console.log("renderProps:",renderProps);
    if(err){
      res.status(500).end(`Internal Server Error ${err}`);
    }else if(redirectLocation){
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    }else if(renderProps){
      
      const store = middlewareConfig(about);
      
      let status = 0;
      
      let token = (req.body && req.body.token) || (req.query && req.query.token) || req.headers['x-access-token'] || req.cookies['token'];
      
      if(token){
        let decoded = jwt.decode(token,req.app.get('jwtTokenSecret'));
        if(decoded.exp <= Date.now()) {
          status = 0;
        }else{
          status = 1;

          var cookieOptions = { maxAge: 600000, httpOnly: true , path:'/' };
          res.cookie("token",token,cookieOptions);
        } 
      }else{
        status = 0;
      };

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
          if(location.pathname!="/login" && location.pathname!="/register"){
            res.redirect("/login");
          }
        }

      
        // runFetchData(renderProps)

        const __html__ = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        );

        var cont = page.main({
          mise : imgs57,
          small : imgs72,
          middle : imgs114,
          big : imgs144
        },__html__,state);
        res.status(200).end(cont);
      });

      store.dispatch(actionType.setLoginStatus(status));
    }else{
      res.status(404).end('Not found');
    }
  });
}