import { login } from './login/login';
import { diet } from './diet/diet';

export function about(state = {} , action){
  return Object.assign({},state,{
    diet : diet(state.diet,action),
    login : login(state.login,action)
  });
}



