import { actionTypesApp } from '../../actions/index';
import { REQUEST_POSTS , RECEIVE_POSTS } from '../../actions/network';

import { request } from '../common/request';
import { get } from '../get';

export function articles(state = {} ,action){
  switch (action.type){
    case REQUEST_POSTS:
      return request(state,action);
    case RECEIVE_POSTS:
      return request(state,action,get);

    default:
      return state;
  }
};