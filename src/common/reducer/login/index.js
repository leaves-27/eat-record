import { user } from './user';
import { statusHanlder } from '../common/common';

export function login(state = {} ,action){
  return Object.assign({},state,{
    user : user(state.user,action),
    status : statusHanlder(state.status,action)
  });
};