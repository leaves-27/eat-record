import { createConstants } from 'redux-convenient-utils';
//action创建函数
export const actionTypesApp = createConstants(
  'LIST_REQUEST',
  'LIST_SUCCESS',
  'LIST_FAILURE'
);

export function listRequest(){
  return {
    type : actionTypesApp.LIST_REQUEST,
    isFetching : true
  }
}

export function listSuccess(data) {
  return {
    type : actionTypesApp.LIST_SUCCESS,
    isFetching : false,
    data : data
  }
}

export function listFailure(error_msg) {
  return {
    type : actionTypesApp.LIST_FAILURE,
    isFetching : false,
    errorMsg : error_msg
  }
}