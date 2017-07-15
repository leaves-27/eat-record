import fetch from 'isomorphic-fetch';
import { Config } from '../config';
import { createConstants } from '../utils';
import { listRequest,listSuccess, listFailure } from './request/list'

export function getList(user){
  return (dispatch) => {
    const url = Config.prefixUrl+"api/list";
    const data = JSON.stringify({
      user : user
    })
    
    const options = {
      method : 'GET',
      headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8', 
      }
    };

    dispatch(listRequest())
    return fetch(url,options)
      .then(res => {
        const result = res.json();
        return result;
      })
      .then(json => {
        if(json.code==0){
          dispatch(listSuccess(json.data))
        }else{
          dispatch(listFailure(json.msg))
        }
      })
  }
}