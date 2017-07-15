import fetch from 'isomorphic-fetch';
import { Config } from '../config';
import { createConstants } from '../utils';

import { 
  backendRequest,
  backendSuccess, 
  backendFailure,

  backendPostArticleRequest,
  backendPostArticleSuccess, 
  backendPostArticleFailure
} from './request/backend'

export const actionTypesApp = createConstants(
  'ADD_GROUP',
  'DELETE_GROUP',
  'INPUT_GROUP',
  'ADD_FIELDSET',
  'DELETE_FIELDSET',
  'DELETE_DIET'
);

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

export function deleteDiet(status){
  return {
    type:actionTypesApp.DELETE_DIET
  }
}


export function getTodayDetail(date){
  return (dispatch) => {
    const url = Config.prefixUrl+"api/backend?date="+date;
    // const data = JSON.stringify({
    //   user : user
    // })
    
    const options = {
      method : 'GET',
      headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8', 
      }
    };

    dispatch(backendRequest())
    return fetch(url,options)
      .then(res => {
        const result = res.json();
        return result;
      })
      .then(json => {
        if(json.code==0){
          dispatch(backendSuccess(json.data))
        }else{
          dispatch(backendFailure(json.msg))
        }
      })
  }
}

export function postArticle(key){
  return (dispatch) => {
    const url = Config.prefixUrl+"api/backend";
    // const data = JSON.stringify({
    //   user : user
    // })
    
    const options = {
      method : 'GET',
      headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8', 
      },
      body: JSON.stringify({
        data:state.diet.fieldsets
      })
    };

    dispatch(backendPostArticleRequest())
    return fetch(url,options)
      .then(res => {
        const result = res.json();
        return result;
      })
      .then(json => {
        if(json.code==0){
          dispatch(backendPostArticleSuccess(json.data))
        }else{
          dispatch(backendPostArticleFailure(json.msg))
        }
      })
  }
}