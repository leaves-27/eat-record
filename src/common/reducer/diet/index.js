import { actionTypesApp } from '../../actions/index';

import { addGroup , deleteGroup, inputGroup } from './group';
import { requestFn } from '../common/request';

import fieldsets from './fieldsets';
import { status } from '../common/common';
import { combineReducers } from 'redux';

export default combineReducers({
  status,
  fieldsets
});

// export function diet(state = {} ,action){
//   return Object.assign({},state,{
//     status : status(state.status,action),
//     fieldsets : fieldsets(state.fieldsets,action)
//   });
// };