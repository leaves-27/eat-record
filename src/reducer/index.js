import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import login from './login/index';
import list from './list/index';
import detail from './detail/index';
import backend from './backend/index';

// import register from './register/index';

// export default combineReducers({
//   login,
//   list,
//   currentScanArticle,
//   tempArticle,
//   routing
// });

export default combineReducers({
  routing,
  login,
  list,
  detail,
  backend
});


