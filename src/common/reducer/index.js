import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import login from './login/index';
import diet from './diet/index';
import detail from './detail/index';
import articles from './articles/index';
import register from './register/index';

export default combineReducers({
  login,
  diet,
  detail,
  articles,
  routing,
  register
});



