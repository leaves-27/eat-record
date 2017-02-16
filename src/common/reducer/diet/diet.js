import { actionTypesApp } from '../../actions/index';
import { REQUEST_POSTS , RECEIVE_POSTS } from '../../actions/network';

import { request , getPreHanlder } from '../common/request';
import { get } from '../get';
import { post } from '../post';

import { addGroup , deleteGroup, inputGroup } from './group';

export function diet(state = {} ,action){
  switch (action.type){
    case REQUEST_POSTS:
      return request(state,action);
      
    case RECEIVE_POSTS:
      if(action.method=="POST"){
        return post(state,action)
      }else{
        return request(state,action,get);
      }

    case actionTypesApp.ADD_GROUP:

      return getPreHanlder(state,action,"diet",addGroup);

    case actionTypesApp.DELETE_GROUP:

      return getPreHanlder(state,action,"diet",deleteGroup);

    case actionTypesApp.INPUT_GROUP:

      return getPreHanlder(state,action,"diet",inputGroup);

    case actionTypesApp.DELETE_DIET:
      return Object.assign({},state,{
        "diet" : state.diet
      });

    default:
      return state;
  }
};