import { status } from '../common/common';
import * as actionTypesApp from '../../actions/index';

import { combineReducers } from 'redux';
import { user } from './user';

export default combineReducers({
  user,
  status
})