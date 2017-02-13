export function login(state,action){
  let flag = false;

  if(action.data.code == 0){
    flag = true;
  }

  return Object.assign({},state,{
    login:{
      flag:flag,
      msg:action.data.msg
    }
  });
};