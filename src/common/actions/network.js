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
        /*
        ** 请求成功后发生跳转的情况一般为：
        ** 1.登录成功后；
        ** 2.接口请求数据时返回当前未登录。
        **
        ** 登录成功后跳转的情况，一般有两种：
        ** 1.url没有任何需要跳转到的地址。
        ** 2.url中含有redirectUrl的情况。
        **
        ** 接口请求数据时返回当前未登录：
        ** 未登录的情况下，返回值code为4。
        **/

        console.log("res11:",res);
        // let result = res.json();
        // let currentPageUrl = result.referer;

        // if(key=="login"){
        //   if(result.code==0) {
        //     let redirectUrl = "/web/backend";
        //     if(currentPageUrl.indexOf("redirectUrl")>0) {
        //       redirectUrl = currentPageUrl.getParam("redirectUrl");
        //     }

        //     res.redirect(redirectUrl);
        //   }else{
        //     return result;
        //   }
        // }else{
        //   if(result.code==4){
        //     res.redirect("/web/login?redirectUrl=" + currentPageUrl);
        //   }
        //   return result;
        // }
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

