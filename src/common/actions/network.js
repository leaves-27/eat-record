import fetch from 'isomorphic-fetch';
import { hashHistory } from 'react-router';

export const REQUEST_POSTS = 'REQUEST_POSTS';

function requestPosts(key,options){
  let mth = 'GET';
  if(options.method && options.method.toUpperCase()  == "POST") {
    mth = options.method;
  };
  
  return {
    type: REQUEST_POSTS,
    key:key,
    method:mth
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS';

function receivePosts(key, json,options) {
  let mth = 'GET';
  
  if(options.method && options.method.toUpperCase() == "POST") {
    mth = options.method;
  };
  
  return {
    type: RECEIVE_POSTS,
    key:key,
    data: json,
    method:mth,
    receivedAt: Date.now()
  }
}

export function fetchPosts(params) {
  const url = params.url;
  const key = params.key;
  const options = params.options || {};

  return dispatch => {
    dispatch(requestPosts(key,options));
    let headers;
    if(options.headers) {
      headers = Object.assign({},options.headers,{
        'Access-Token': sessionStorage.getItem('access_token')
      });
      options.headers = headers;
    }
    
    return fetch(url,options)
      .then(res => {
        return res.json();
      })
      .then(json => dispatch(receivePosts(key,json,options)))
  }
}

export function isShouldFetch(state,key) {
  const data = state[key];

  if(!data) { //所要获取的数据不存在，则去发送获取请求
    return true
  }else if(data.isFetching){//所要获取的数据正在获取中，则放弃发送获取请求
    return false
  }else {
    return data.didInvalidate //判断获取的数据是否过期，若过期则重新获取；否则放弃重新获取。
  }
}

