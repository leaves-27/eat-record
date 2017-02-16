import { browserHistory } from 'react-router';

/*
** GET:
**    直接对整个data进行更新。
** POST:
**    对code进行判断，为0进行跳转，为1，则更新msg
**    
** code:0
** data:""
** 
*/
export function login(state,action){
  
  if(action.method=="POST" && action.data.code==0){
    browserHistory.push("/web/backend");
  }

  let login = Object.assign({},state.login,{
    didInvalidate : true,
    isFetching : false,
    data : action.data
  });
  
  return Object.assign({},state,{
    login : login
  });
};