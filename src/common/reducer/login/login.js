import { callbackPreHanlder } from '../common/pretreatment';

import { user } from './user';
import { request } from './request';

export function login(state = {} ,action){
  return Object.assign({},state,{
    user : user(state.user,action),
    request : callbackPreHanlder(state.request,action,request)
  });
};