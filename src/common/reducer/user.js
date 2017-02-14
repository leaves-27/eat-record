import { actionTypesApp } from '../actions/index';

export function user(state={},action){
  switch (action.type){
    case actionTypesApp.CHANGE_USER:
      let result = {};
      
      if(action.target.name == "name") {
        result = Object.assign({},state,{
          name:action.target.value
        });
        
      }else if(action.target.name == "password"){
        result = Object.assign({},state,{
          password:action.target.value
        });
      }

      return result;

    default:
      return state;
  }
}