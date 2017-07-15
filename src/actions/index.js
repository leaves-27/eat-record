import { createConstants } from '../utils';
import './async';
//action类型
export const actionTypesApp = createConstants(
  'ADD_GROUP',
  'DELETE_GROUP',
  'INPUT_GROUP',
  'ADD_FIELDSET',
  'DELETE_FIELDSET',
  'UPDATE_TOKEN',
  'CHANGE_USER',
  'SET_LOGIN_STATUS',

  'GET_DETAIL',
  'BACK',
  'RESET_STATE',
  'NEXT',

  'DELETE_DIET',

  'DEFAULT',
  'REGISTER_CHANGE_USER',
  'VALIDATE'
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



export function changeUser(_this){
  return {
    type:actionTypesApp.CHANGE_USER,
    target:_this.target
  }
}

export function validate(status,msg){
  return {
    type:actionTypesApp.VALIDATE,
    data:{
      status : status,
      msg : msg
    }
  }
}

export function registerChangeUser(_this){
  return {
    type:actionTypesApp.REGISTER_CHANGE_USER,
    target:_this.target
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

export function updateToken(token){
  return {
    type : actionTypesApp.UPDATE_TOKEN,
    value : token
  }
}

export function getDefault(index){
  return {
    type : actionTypesApp.DEFAULT
  }
}