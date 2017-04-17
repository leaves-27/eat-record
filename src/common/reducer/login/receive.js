export default (state,action)=>{
  
  switch(action.key){
    //如果是登录
    case "login":
      if(action.data.code == 0) {
        return Object.assign({},state,{
          code:0,
          status:1
        });
      }else{
        return Object.assign({},state,{
          code:1,
          msg:action.data.msg
        });
      }
    //如果是退出
    case "loginout":
      if(action.data.code == 0) {
        return Object.assign({},state,{
          code:0,
          status:0
        });
      }else{
        return Object.assign({},state,{
          code:1,
          msg:action.data.msg
        });
      }
    default:
      return state;
  }
}