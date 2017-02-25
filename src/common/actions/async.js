import { fetchData } from './network';

/*
** 获取的数据结构一般为:
** {
**    isFetching:false,
**    data:
** }
**/

//域名

export let prefixUrl;
let env = process.env.NODE_ENV=="production";
console.log("process.env.NODE_ENV:",typeof process.env.NODE_ENV);
env = "production";
if(env == "production") {
  prefixUrl= "//funnyxiu.com/"
}else{
  prefixUrl= "localhost:3000/"
}

export function postLogin(){
  let key = "login";

  return (dispatch, getState) => {
    const url = prefixUrl+"api/login";

    let state = getState();
    let options = {
      method:'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8', 
      },
      body : JSON.stringify({
        data : state.login.user
      })
    };

    return dispatch(fetchData({
      url:url,
      key:key,
      options:options
    }))
  }
}


export function getList(){//key为获取的json节点数据的节点名。
  let key = "articles"
  return (dispatch, getState) => {
    const url = prefixUrl+"api/list";
    return dispatch(fetchData({
      url:url,
      key:key
    }))
  }
}

/*
** 获取指定日期的值
**/
export function getDetail(key,date) {//key为获取的json节点数据的节点名。
  return (dispatch, getState) => {
    const url = prefixUrl+"api/backend?date="+date;
    return dispatch(fetchData({
      url:url,
      key:key
    }))
  }
}

export function postArticle(key){
  return (dispatch, getState) => {
    let state = getState();
    
    const url = prefixUrl+"api/backend";
    let options = {
      method:'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        data:state.diet.fieldsets
      })
    };

    return dispatch(fetchData({
      url:url,
      key:key,
      options:options
    }));
  }
}

export function loginout(){
  let key = "loginout";

  return (dispatch, getState) => {
    const url = prefixUrl+"api/loginout";

    let state = getState();
    let options = {
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8', 
      }
    };

    return dispatch(fetchData({
      url:url,
      key:key,
      options:options
    }))
  }
}