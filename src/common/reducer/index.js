import { combineReducers } from 'redux';

import { entries } from './entries';


export function about(state = {} ,action){
  return {
    entries : entries(state.entries,action)
  }
}


