import { fetchPosts,isShouldFetch } from './network';
//域名
export const prefixUrl = "http://localhost:3000/"

export function postArticle(key){
  return (dispatch, getState) => {
    let state = getState();
    
    if(isShouldFetch(state,key)) {
      const url = prefixUrl+"api/backend";
      let options = {
        method:'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
          data:state.diet.data.data.fieldsets
        })
      };

      return dispatch(fetchPosts({
        url:url,
        key:key,
        options:options
      }))
    }else{
      return Promise.resolve()
    }
  }
}

export function getList(key){//key为获取的json节点数据的节点名。
  return (dispatch, getState) => {
    if(isShouldFetch(getState(),key)) {
      const url = prefixUrl+"api/list";
      return dispatch(fetchPosts({
        url:url,
        key:key
      }))
    }else{
      return Promise.resolve()
    }
  }
}

export function getDayDiet(key) {//key为获取的json节点数据的节点名。
  return (dispatch, getState) => {
    if(isShouldFetch(getState(),key)) {
      const url = prefixUrl+"api/backend";
      return dispatch(fetchPosts({
        url:url,
        key:key
      }))
    }else{
      return Promise.resolve()
    }
  }
}

export function postLogin(){
  let key = "login";
  return (dispatch, getState) => {
    let state = getState();
    
    if(isShouldFetch(state,key)) {
      const url = prefixUrl+"api/login";
      let options = {
        method:'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=utf-8', 
        },
        body: JSON.stringify({
          data:state.login.user
        })
      };

      return dispatch(fetchPosts({
        url:url,
        key:key,
        options:options
      }))
    }else{
      return Promise.resolve()
    }
  }
}
