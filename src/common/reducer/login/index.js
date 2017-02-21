import { status } from '../common/common';
import * as actionTypesApp from '../../actions/index';

import { combineReducers } from 'redux';
import { user } from './user';


export default function login(state = {} ,action){
  if (action.type == actionTypesApp.RESET_STATE) {
    return Object.assign({},state,{});
  }else{
    return Object.assign({},state,{
      user : user(state.user,action),
      status : status(state.status,action)
    });

    // return combineReducers({
    //   user,
    //   status
    // });
  }
};