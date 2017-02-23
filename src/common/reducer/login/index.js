import { actionTypesApp } from '../../actions/index';
import { REQUEST_POSTS ,RECEIVE_POSTS } from '../../actions/network';
import { createReducer } from 'redux-convenient-utils';

const initState = {
  user:{
    name:"",
    password:""
  },
  status:0
};

const loginReceiveHanlder = (state,action)=>{
  if(action.key=="login"){
    if(action.data.code == 0) {
      return Object.assign({},state,{
        code:0,
        status:1
      });
    }else{
      return Object.assign({},state,{
        code:1,
        msg:action.data.msg
      });
    }
  }else if(action.key=="loginout"){
    if(action.data.code == 0) {
      return Object.assign({},state,{
        code:0,
        status:0
      });
    }else{
      return Object.assign({},state,{
        code:1,
        msg:action.data.msg
      });
    }
  }else{
    return state;
  }
  
}
export default createReducer(initState,{
  [ actionTypesApp.RESET_STATE ]( state,action ){
    return initState;
  },
  [ actionTypesApp.SET_LOGIN_STATUS ]( state,action ){
    return Object.assign({},state,{
      status : action.value
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
