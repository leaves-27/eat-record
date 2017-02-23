import { createConstants } from '../utils';
import './async';
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
  'CHANGE_USER',
  'RESET_STATE',
  'SET_LOGIN_STATUS'
);

//action创建函数
export function resetState(){
  return {
    type:actionTypesApp.RESET_STATE
  }
}

//action创建函数
export function setLoginStatus(value){
  return {
    type:actionTypesApp.SET_LOGIN_STATUS,
    value:value
  }
}


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