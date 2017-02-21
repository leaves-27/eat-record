import { login } from './login/index';
import { diet } from './diet/index';
import { detail } from './detail/index';
import { articles } from './articles/index';

export default function(state = {} , action){
  return {
    login : login(state.login,action),
    diet : diet(state.diet,action),
    detail : detail(state.detail,action),
    articles : articles(state.articles,action)
  };
}



