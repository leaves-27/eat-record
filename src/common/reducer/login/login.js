import { actionTypesApp } from '../../actions/index';
import { REQUEST_POSTS , RECEIVE_POSTS } from '../../actions/network';

import { request , getPreHanlder } from '../common/request';
import { post } from '../post';
import { get } from '../get';

export function login(state = {} ,action){
  switch (action.type){
    case REQUEST_POSTS:
      return request(state,action);
    case RECEIVE_POSTS:
      return post(state,action)

    case actionTypesApp.CHANGE_USER:
      let result = {};
      let user;
      
      if(action.target.name == "name") {
        user = Object.assign({},state.user,{
          name:action.target.value
        });
      }else if(action.target.name == "password"){
        user = Object.assign({},state.user,{
          password:action.target.value
        });
      }

      return Object.assign({},state,{
        user : user
      });

    default:
      return state;
  }
};