/*
** 该方法用于对网络请求返回的数据格式的统一封装。每个网络请求返回的state是必须设计为如下方式：
** isFetching： 
** didInvalidate：
** lastUpdated：
** data:
**/

import { REQUEST_POSTS ,RECEIVE_POSTS } from '../../actions/network';

export function request(state = {}, action,callback){
  switch (action.type){
    case REQUEST_POSTS:

      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
      
    case RECEIVE_POSTS:
      const data = callback(state.data,action);
      
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        lastUpdated: action.receivedAt,
        data: data
      });

    default:
      return state
  }
}

export function getPreHanlder(state,action,key,callback){
  let item = Object.assign({},state[key],{
    data:callback(state[key].data,action)
  });

  return Object.assign({},state,{
    [key]:item
  });
}