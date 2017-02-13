import { combineReducers } from 'redux';

import { entries } from './entries';
import { user } from './user';


export function about(state = {} ,action){
  return {
    entries : entries(state.entries,action),
    user : user(state.user,action)
  }
}


