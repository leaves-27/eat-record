export function login(state,action){
  let login = Object.assign({},state.login,{
    didInvalidate: true,
    isFetching:false,
    data:action.data
  });

  return Object.assign({},state,{
    login:login
  });
};