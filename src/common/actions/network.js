import fetch from 'isomorphic-fetch';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

function requestData(key,options){
  return {
    type: REQUEST_POSTS,
    key:key
  }
}

function receiveData(key, json,options) {
  return {
    type: RECEIVE_POSTS,
    key:key,
    data: json,
    receivedAt: Date.now()
  }
}

export function fetchData(params) {
  const url = params.url;
  const key = params.key;
  const options = params.options || {};

  return dispatch => {
    //在请求头中添加credentials:'include'
    let newOptions = Object.assign({},options,{
      credentials:'include'
    });


    let method = 'GET';
    if(newOptions.method && newOptions.method.toUpperCase() == "POST") {
      method = newOptions.method;
    };

    //在发送的action中添加请求方法
    dispatch(Object.assign({},requestData(key,newOptions),{
      method : method
    }));

    return fetch(url,newOptions)
      .then(res => {
        let result = res.json();
        return result;
      })
      .then(json => dispatch(receiveData(key,json,newOptions)))
  }
}

// export function isShouldFetch(state,key) {
//   const data = state[key];

//   if(data.isFetching){ //所要获取的数据正在获取中，则放弃发送获取请求
//     return false
//   }else {
//     return true //判断获取的数据是否过期，若过期则重新获取；否则放弃重新获取。
//   }
// }

