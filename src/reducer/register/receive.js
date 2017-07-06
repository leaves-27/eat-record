export default (state,action)=>{
  
  switch(action.key){
    //如果是注册
    case "register":
      if(action.data.code == 0) {
        return Object.assign({},state,{
          code : 0,
          status : 1
        });
      }else{
        return Object.assign({},state,{
          code : 1,
          msg : action.data.msg
        });
      }
    default:
      return state;
  }
}