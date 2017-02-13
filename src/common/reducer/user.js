export function user(state={},action){
  let result = {};
  if(action.target.name == "name") {
    result = Object.assign({},state,{
      name:action.target.value
    });
  }else if(action.target.name == "password"){
    result = Object.assign({},state,{
      value:action.target.value
    });
  }

  return result;
}