/*
** 公用的中间件，用来对请求过程中的数据处理。
** 该方法用于对网络请求返回的数据格式的统一封装。每个网络请求返回的state是必须设计为如下方式：
** isFetching： 
** didInvalidate：
** lastUpdated：
** data:
**/

import { REQUEST_POSTS ,RECEIVE_POSTS } from '../../actions/network';

export function requestFn(state = {}, action , callback){
  switch (action.type){
    case REQUEST_POSTS:

      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
      
    case RECEIVE_POSTS:

      const result = Object.assign({},state,{
        isFetching: false,
        didInvalidate: false,
        lastUpdated: action.receivedAt
      });
      
      return callback(result,action)

    default:
      return state
  }
}