import { actionTypesApp } from '../../actions/index';

export function user(state = {} ,action){
  switch (action.type){
    
    case actionTypesApp.RESET_STATE:
      return Object.assign({},state,{
        name:"",
        password:""
      });

    case actionTypesApp.CHANGE_USER:
      let result = {};
      let user;
      
      if(action.target.name == "name") {
        user = Object.assign({},state,{
          name:action.target.value
        });
      }else if(action.target.name == "password"){
        user = Object.assign({},state,{
          password:action.target.value
        });
      }

      return user;

    default:
      return state;
  }
}