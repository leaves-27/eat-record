import { createConstants } from 'redux-convenient-utils';
//action创建函数
export const actionTypesApp = createConstants(
  'DETAIL_REQUEST',
  'DETAIL_SUCCESS',
  'DETAIL_FAILURE'
);

export function detailRequest(){
  return {
    type : actionTypesApp.DETAIL_REQUEST,
    isFetching : true
  }
}

export function detailSuccess(data) {
  return {
    type : actionTypesApp.DETAIL_SUCCESS,
    isFetching : false,
    data : data
  }
}

export function detailFailure(error_msg) {
  return {
    type : actionTypesApp.DETAIL_FAILURE,
    isFetching : false,
    errorMsg : error_msg
  }
}