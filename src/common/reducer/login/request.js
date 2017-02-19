export function request(state,action){
  let login = {
    data : action.data
  };

  if(action.method=="POST" && action.data.code==0){
    login = Object.assign({},login,{
      status : 1
    });
    localStorage.setItem("status",1);
  };

  return Object.assign({},state,login);
}