// import { createConstants } from '../utils';

import { createConstants } from 'redux-convenient-utils';
//action创建函数
export const actionTypesApp = createConstants(
  'LOGIN_REQUEST',
  'LOGIN_SUCCESS',
  'LOGIN_FAILURE'
);

export function loginRequest(){
  return {
    type : actionTypesApp.LOGIN_REQUEST,
    isFetching : true
  }
}

export function loginSuccess(isLogin) {
  return {
    type : actionTypesApp.LOGIN_SUCCESS,
    isFetching : false,
    isLogin : isLogin
  }
}

export function loginFailure(error_msg) {
  return {
    type : actionTypesApp.LOGIN_FAILURE,
    isFetching : false,
    errorMsg : error_msg
  }
}