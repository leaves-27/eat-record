import { actionTypesApp } from '../actions/index';
import { REQUEST_POSTS , RECEIVE_POSTS } from '../actions/network';

import { get } from './get';

import { request , getPreHanlder } from './request';
import { post } from './post';

import { addGroup , deleteGroup, inputGroup } from './group';

export function entries(state = {} ,action){
  switch (action.type){
    case REQUEST_POSTS:

      return Object.assign({},state,{
        [action.key]: request(state[action.key],action)
      });
      
    case RECEIVE_POSTS:
      if(action.method=="POST") {
        return post(state,action)
      }else{
        return Object.assign({},state,{
          [action.key]: request(state[action.key],action,get)
        });
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