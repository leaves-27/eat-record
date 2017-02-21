import { actionTypesApp } from '../../actions/index';
import { REQUEST_POSTS ,RECEIVE_POSTS } from '../../actions/network';

import { addGroup , deleteGroup, inputGroup } from './group';
import { requestFn } from '../common/request';
import { getDataDataHanlder,initFieldsets } from '../common/common';

const userInput = (state={},action)=>{
  switch (action.type){
    case actionTypesApp.ADD_GROUP:
      return Object.assign(state,action,{
        data : addGroup(state.data,action)
      });
    
    case actionTypesApp.DELETE_GROUP:
      return Object.assign(state,action,{
        data : deleteGroup(state.data,action)
      });
    
    case actionTypesApp.INPUT_GROUP:
      return Object.assign(state,action,{
        data : inputGroup(state.data,action)
      });

    case actionTypesApp.DELETE_DIET:
      return Object.assign({},state,{
        "data" : []
      });

    default:
      return state;
  }
}

/*
* fieldsets来源有两个：
* 1.用户请求
* 2.用户输入
*
* fieldsets的数据结构：
* {
*   isFetching : false,
*   data : []
* }
**/
export function fieldsets(state={},action){
  if(action.key!="diet") {
    return state;
  }

  if(action.type == REQUEST_POSTS){
    return Object.assign({},state,requestFn(state,action));
  }else if(action.type == RECEIVE_POSTS){
    return Object.assign({},state,requestFn(state,action,getDataDataHanlder(state,action,initFieldsets())));
  }else{
    return Object.assign({},state,userInput(state,action));
  }
}