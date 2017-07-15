import { createConstants } from 'redux-convenient-utils';
//action创建函数
export const actionTypesApp = createConstants(
  'BACKEND_REQUEST',
  'BACKEND_SUCCESS',
  'BACKEND_FAILURE',
  'BACKEND_POST_ARTICLE_REQUEST',
  'BACKEND_POST_ARTICLE_SUCCESS',
  'BACKEND_POST_ARTICLE_FAILURE'
);

export function backendRequest(){
  return {
    type : actionTypesApp.BACKEND_REQUEST,
    isFetching : true
  }
}

export function backendSuccess(data) {
  return {
    type : actionTypesApp.BACKEND_SUCCESS,
    isFetching : false,
    data : data
  }
}

export function backendFailure(error_msg) {
  return {
    type : actionTypesApp.BACKEND_FAILURE,
    isFetching : false,
    errorMsg : error_msg
  }
}


export function backendPostArticleRequest(){
  return {
    type : actionTypesApp.BACKEND_POST_ARTICLE_REQUEST,
    isFetching : true
  }
}

export function backendPostArticleSuccess(data) {
  return {
    type : actionTypesApp.BACKEND_POST_ARTICLE_SUCCESS,
    isFetching : false,
    data : data
  }
}

export function backendPostArticleFailure(error_msg) {
  return {
    type : actionTypesApp.BACKEND_POST_ARTICLE_FAILURE,
    isFetching : false,
    errorMsg : error_msg
  }
}