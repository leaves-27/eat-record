import { createReducer } from 'redux-convenient-utils';

// import { actionTypesApp } from '../../actions/index';
// import { REQUEST_POSTS ,RECEIVE_POSTS } from '../../actions/network';
// import loginReceiveHanlder from './receive';

import * as User from '../../actions/user';
import * as Login from '../../actions/login';

const actionTypesApp = Object.assign({},User.actionTypesApp,Login.actionTypesApp);

const initState = {
  user : {
    name : "",
    password : ""
  },
  request : {

  }
};

export default createReducer(initState,{

  [ actionTypesApp.SET_NAME ](state,action){

    const user = Object.assign({},state.user,{
      name : action.name
    });
    
    return Object.assign({},state,{
      user : user
    });
  },
  [ actionTypesApp.SET_PASSWORD ](state,action){

    const user = Object.assign({},state.user,{
      password : action.password
    });

    return Object.assign({},state,{
      user : user
    });
  },
  [ actionTypesApp.LOGIN_REQUEST ](state,action){
    const tempLogin = {
      isFetching : action.isFetching 
    }

    let login;

    login = tempLogin;

    const request = Object.assign({},state.request,{
      login : login
    });

    return Object.assign({},state,{
      request : request
    });
  },
  [ actionTypesApp.LOGIN_SUCCESS ](state,action){
    
    const tempLogin = {
      isFetching : action.isFetching,
      isLogin : action.isLogin
    }

    let login;

    if(!state.request.login){
      login = tempLogin;
    }else{
      login = Object.assign({},state.request.login,tempLogin);
    }

    const request = Object.assign({},state.request,{
      login : login
    });

    return Object.assign({},state,{
      request : request
    });
  },
  [ actionTypesApp.LOGIN_FAILURE ](state,action){

    const tempLogin = {
      isFetching : action.isFetching,
      errorMsg : action.errorMsg
    }

    let login;

    if(!state.request.login){
      login = tempLogin;
    }else{
      login = Object.assign({},state.request.login,tempLogin);
    }

    const request = Object.assign({},state.request,{
      login : login
    });

    return Object.assign({},state,{
      request : request
    });
  }
})
