import { createReducer } from 'redux-convenient-utils';

import { actionTypesApp } from '../../actions/index';
import { REQUEST_POSTS ,RECEIVE_POSTS } from '../../actions/network';
import loginReceiveHanlder from './receive';

const initState = {
  user:{
    name:"",
    password:""
  },
  status:0,
  token : ""
};

export default createReducer(initState,{
  [ actionTypesApp.RESET_STATE ]( state,action ){
    return initState;
  },
  [ actionTypesApp.SET_LOGIN_STATUS ]( state,action ){
    return Object.assign({},state,{
      status : action.value
    });
  },
  [ actionTypesApp.UPDATE_TOKEN ]( state,action ){
    return Object.assign({},state,{
      token : action.value
    });
  },
  [ RECEIVE_POSTS ]( state, action ) {
    return loginReceiveHanlder(state, action);
  },
  [ actionTypesApp.CHANGE_USER ]( state,action ){
    let user;

    if(action.target.name == "name") {
      user = Object.assign({},state.user,{
        name : action.target.value
      });
    }else if(action.target.name == "password"){
      user = Object.assign({},state.user,{
        password : action.target.value
      });
    }

    let login = Object.assign({},state,{
      user : user
    });

    return login;
  }
});
