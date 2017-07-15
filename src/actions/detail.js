import fetch from 'isomorphic-fetch';
import { Config } from '../config';
import { createConstants } from '../utils';
import { detailRequest,detailSuccess, detailFailure } from './request/detail'


export function getDetail(date){
  return (dispatch) => {
    const url = Config.prefixUrl+"api/backend?date="+date;
    // const data = JSON.stringify({
    //   user : user
    // })
    
    const options = {
      method : 'GET',
      headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8', 
      }
    };

    dispatch(detailRequest())
    return fetch(url,options)
      .then(res => {
        const result = res.json();
        return result;
      })
      .then(json => {
        if(json.code==0){
          dispatch(detailSuccess(json.data))
        }else{
          dispatch(detailFailure(json.msg))
        }
      })
  }
}