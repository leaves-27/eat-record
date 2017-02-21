import React from 'react';
import { render } from "react-dom";
import { Provider } from 'react-redux';
import { match,browserHistory} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import about from '../common/reducer/index';
import middlewareConfig from '../common/middleware-config';
import createRoutes from '../common/router';

import css from '../../bower_components/bootstrap/dist/css/bootstrap.min.css'
import stylus from './index.styl';

import $ from 'jquery'
import 'bootstrap';

const store = middlewareConfig(about,window.__INITIAL_STATE__);
const history = syncHistoryWithStore(browserHistory,store);

match({
  history: createRoutes(history),
  routes:routes(store.getState())
}, (error, redirectLocation, renderProps) => {
  render(
    <Provider store={store}>
      <RouterContext {...renderProps} />
    </Provider>,
    document.getElementById('root')
  )
});