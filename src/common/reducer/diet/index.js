import { actionTypesApp } from '../../actions/index';

import { addGroup , deleteGroup, inputGroup } from './group';
import { requestFn } from '../common/request';

import { fieldsets } from './fieldsets';
import { statusHanlder } from '../common/common';

export function diet(state = {} ,action){
  return Object.assign({},state,{
    status : statusHanlder(state.status,action),
    fieldsets : fieldsets(state.fieldsets,action)
  });
};