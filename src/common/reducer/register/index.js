import { createReducer } from 'redux-convenient-utils';

import { actionTypesApp } from '../../actions/index';
import { REQUEST_POSTS ,RECEIVE_POSTS } from '../../actions/network';
import registerReceiveHanlder from './receive';

const initState = {
  user : {
    email : "",
    name : "",
    password : "",
    repassword : ""
  },
  status : 0
};

export default createReducer(initState,{
  [ RECEIVE_POSTS ]( state, action ) {
    return registerReceiveHanlder(state, action);
  },
  [ actionTypesApp.VALIDATE ]( state, action ) {
    return registerReceiveHanlder(state, action);
  },
  [ actionTypesApp.REGISTER_CHANGE_USER ]( state,action ){
    let user;

    if(action.target.name == "name") {
      user = Object.assign({},state.user,{
        name : action.target.value
      });
    }else if(action.target.name == "password"){
      user = Object.assign({},state.user,{
        password : action.target.value
      });
    }else if(action.target.name == "email"){
      user = Object.assign({},state.user,{
        email : action.target.value
      });
    }else if(action.target.name == "repassword"){
      user = Object.assign({},state.user,{
        repassword : action.target.value
      });
    }

    let register = Object.assign({},state,{
      user : user
    });

    return register;
  }
});
