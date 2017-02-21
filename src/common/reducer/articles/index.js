import { REQUEST_POSTS ,RECEIVE_POSTS } from '../../actions/network';
import { requestFn } from '../common/request';
import { getDataDataHanlder } from '../common/common';

export function articles(state={},action){
  if(action.key!="articles"){
    return state;
  }

  if(action.type == REQUEST_POSTS){
    return Object.assign({},state,requestFn(state,action));
  }else if(action.type == RECEIVE_POSTS){
    return Object.assign({},state,requestFn(state,action,getDataDataHanlder(state,action,function(){
      return [];
    })));
  }
}