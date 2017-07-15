import fetch from 'isomorphic-fetch';
import { Config } from '../config';
import { createConstants } from '../utils';
import { loginRequest,loginSuccess, loginFailure } from './request/login'

export const actionTypesApp = createConstants(
  'SET_NAME',
  'SET_PASSWORD',
  'SET_IS_LOGIN'
);

export function setName(name){
  return {
    type : actionTypesApp.SET_NAME,
    name : name
  }
}

export function setPassword(password){
  return {
    type : actionTypesApp.SET_PASSWORD,
    password : password
  }
}


export function goLogin(user){
  return (dispatch) => {
    const url = Config.prefixUrl+"api/login";
    const data = JSON.stringify({
      user : user
    })
    const options = {
      method : 'POST',
      headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8', 
      },
      body : data
    };

    dispatch(loginRequest())
    return fetch(url,options)
      .then(res => {
        const result = res.json();
        return result;
      })
      .then(json => {

        if(json.code==0){
          dispatch(loginSuccess(true))
        }else{
          dispatch(loginFailure(json.msg))
        }
      })
  }
}