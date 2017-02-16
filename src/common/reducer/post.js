import  { diet } from './post/diet';
import  { login } from './post/login';

/*
** 该方法用于对post请求返回的数据的处理
** author: leaves-27
** date: 2017-01-23
*/
export function post(state,action){
  switch (action.key){
    case "diet":
      return diet(state,action);
    case "login":
      return login(state,action);
    default:
      return state;
  }
}