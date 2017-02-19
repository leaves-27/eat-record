function request(state = {} ,action){
  switch (action.key) {
    case "articles":
      return Object.assign({},state,{
        data : action.data
      });
      
    default :
      return state;
  }
};


export function articles(state = {} ,action){
  return Object.assign({},state,{
    request : callbackPreHanlder(state.request,action,request)
  });
};