import login from './login/index';
import diet from './diet/index';
import detail from './detail/index';
import articles from './articles/index';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

export default combineReducers({
  login,
  diet,
  detail,
  articles,
  routing
});

// export default function(state = {} , action){
//   return {
//     login : login(state.login,action),
//     diet : diet(state.diet,action),
//     detail : detail(state.detail,action),
//     articles : articles(state.articles,action)
//   };
// }



