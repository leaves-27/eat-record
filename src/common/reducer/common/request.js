/*
** 公用的中间件，用来对请求过程中的数据处理。
** 该方法用于对网络请求返回的数据格式的统一封装。每个网络请求返回的state是必须设计为如下方式：
** isFetching： 
** didInvalidate：
** lastUpdated：
** data:
**/

import { REQUEST_POSTS ,RECEIVE_POSTS } from '../../actions/network';

export const createReducer = (initialState, reducerMap)=>{
  return (state = initialState, action)=>{
    const reducer = reducerMap[action.type];
    return reducer ? reducer(state, action) : state;
  };
}

export const requestFn = (state = {}, action , receivePostHanlder , arrary = [])=>{
  var arr = [{
    action : REQUEST_POSTS,
    hanlder : function(state,action){
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    }
  },{
    action : RECEIVE_POSTS,
    hanlder : function(state,action){
      const result = Object.assign({},state,{
        isFetching: false,
        didInvalidate: false,
        lastUpdated: action.receivedAt
      });

      return receivePostHanlder(result,action);
    }
  }];

  for(var j=0;j<arrary.length;j++){
    arr.push(arrary[j]);
  }


  var reducerMap = {};

  for(var i=0;i < arr.length;i++){
    reducerMap[arr[i].action]=arr[i].hanlder
  };

  return createReducer(state,reducerMap);
} 

// export function requestFn(state = {}, action , callback){
//   switch (action.type){
//     case REQUEST_POSTS:

//       return Object.assign({}, state, {
//         isFetching: true,
//         didInvalidate: false
//       });
      
//     case RECEIVE_POSTS:

//       const result = Object.assign({},state,{
//         isFetching: false,
//         didInvalidate: false,
//         lastUpdated: action.receivedAt
//       });
      
//       return callback(result,action)

//     default:
//       return state
//   }
// }