import { combineReducers } from 'redux';
import { createReducer } from 'redux-convenient-utils';

import * as ActionTypes from '../actions/index';
import { routerReducer as routing } from 'react-router-redux';

// import login from './login/index';
// import diet from './diet/index';
// import detail from './detail/index';
// import articles from './articles/index';
// import register from './register/index';

// export default combineReducers({
//   login,
//   diet,
//   detail,
//   articles,
//   routing,
//   register
// });

const initState = {};

const user = createReducer(initState, {
  [ActionTypes.SET_USER_INFO](state, action) {
    return Object.assign({},state,{
      user : action.value
    });
  }
});

export default combineReducers({
  user,
  routing
});


