import { createConstants } from '../utils';
import { fetchPosts,isShouldFetch } from './network';

//域名
export const prefixUrl = "http://localhost:3000/"
//action类型
export const actionTypesApp = createConstants(
  'ADD_GROUP',
  'DELETE_GROUP',
  'INPUT_GROUP',
  'ADD_FIELDSET',
  'DELETE_FIELDSET',
  'BACK',
  'GET_DETAIL',
  'NEXT',
  'DELETE_DIET',
  'CHANGE_USER'
);

//action创建函数

export function addGroup(index){
  return {
    type:actionTypesApp.ADD_GROUP,
    index:index
  }
}

export function inputGroup(pIndex,cIndex,_this){
  return {
    type:actionTypesApp.INPUT_GROUP,
    pIndex:pIndex,
    cIndex:cIndex,
    target:_this.target
  }
}


export function changeUser(_this){
  return {
    type:actionTypesApp.CHANGE_USER,
    target:_this.target
  }
}


export function deleteGroup(pIndex,cIndex){
  return {
    type:actionTypesApp.DELETE_GROUP,
    pIndex:pIndex,
    cIndex:cIndex
  }
}

export function addFieldset(index){
  return {
    type:actionTypesApp.ADD_FIELDSET,
    index:index
  }
}

export function deleteFieldset(index){
  return {
    type:actionTypesApp.DELETE_FIELDSET,
    index:index
  }
}

export function getBack(){
  return {
    type:actionTypesApp.BACK
  }
}

export function updateStatus(status){
  return {
    type:actionTypesApp.NEXT,
    status:status
  }
}

export function deleteDiet(status){
  return {
    type:actionTypesApp.DELETE_DIET
  }
}

export function postArticle(key){
  return (dispatch, getState) => {
    let state = getState();
    
    if(isShouldFetch(state,key)) {
      const url = prefixUrl+"api/article.json";
      let options = {
        method:'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
          data:state.entries.diet.data.data.fieldsets
        })
      };

      return dispatch(fetchPosts({
        url:url,
        key:key,
        options:options
      }))
    }else{
      return Promise.resolve()
    }
  }
}

export function getList(key){//key为获取的json节点数据的节点名。
  return (dispatch, getState) => {
    if(isShouldFetch(getState(),key)) {
      const url = prefixUrl+"api/list.json";
      return dispatch(fetchPosts({
        url:url,
        key:key
      }))
    }else{
      return Promise.resolve()
    }
  }
}

export function getDayDiet(key) {//key为获取的json节点数据的节点名。
  return (dispatch, getState) => {
    if(isShouldFetch(getState(),key)) {
      const url = prefixUrl+"api/article.json";
      return dispatch(fetchPosts({
        url:url,
        key:key
      }))
    }else{
      return Promise.resolve()
    }
  }
}

export function postLogin(){
  let key = "login";
  return (dispatch, getState) => {
    let state = getState();
    
    if(isShouldFetch(state,key)) {
      const url = prefixUrl+"api/login.json";
      let options = {
        method:'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=utf-8', 
        },
        body: JSON.stringify({
          data:state.user
        })
      };

      return dispatch(fetchPosts({
        url:url,
        key:key,
        options:options
      }))
    }else{
      return Promise.resolve()
    }
  }
}

export function loginValidationRequest(login,location){
  let key = "login";
  return (dispatch, getState) => {
    let state = getState();
    if(isShouldFetch(state,key)) {
      const url = prefixUrl+"api/validation.json";
      let options = {
        method:'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=utf-8', 
        },
        body: JSON.stringify({
          data:state.user
        })
      };

      return dispatch(fetchPosts({
        url:url,
        key:key,
        options:options
      }))
    }else{
      return Promise.resolve()
    }
  }
}
