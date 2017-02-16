import { combineReducers } from 'redux';

import { articles } from './articles/articles';
import { login } from './login/login';
import { diet } from './diet/diet';

export function about(state = {} , action){
  return {
    articles : articles(state.articles,action), 
    diet : diet(state.diet,action),
    login : login(state.login,action)
  }
}


