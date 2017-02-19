import { actionTypesApp } from '../../actions/index';
import { REQUEST_POSTS ,RECEIVE_POSTS } from '../../actions/network';

import { addGroup , deleteGroup, inputGroup } from './group';
import { getPreHanlder } from '../common/pretreatment';

import { fieldsets } from './fieldsets';
import { request } from './request';

export function diet(state = {} ,action){
  // return {
  //   request : callbackPreHanlder(state.request,action,request),
  //   fieldsets : fieldsets(state.fieldsets,action)
  // }

  switch (action.type){
    case REQUEST_POSTS:

      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
      
    case RECEIVE_POSTS:

      const result = Object.assign({},{
        isFetching: false,
        didInvalidate: false,
        lastUpdated: action.receivedAt
      },request(state,action));
      
      return Object.assign({}, state , result);

    case actionTypesApp.ADD_GROUP:
      return getPreHanlder(state,action,"diet",addGroup);
    
    case actionTypesApp.DELETE_GROUP:
      return getPreHanlder(state,action,"diet",deleteGroup);
    
    case actionTypesApp.INPUT_GROUP:
      return getPreHanlder(state,action,"diet",inputGroup);

    case actionTypesApp.DELETE_DIET:
      return Object.assign({},state,{
        "diet" : {}
      });

    default:
      return state
  }
};