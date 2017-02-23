import { createReducer } from 'redux-convenient-utils';

import { actionTypesApp } from '../../actions/index';
import { REQUEST_POSTS ,RECEIVE_POSTS } from '../../actions/network';
import { addGroup , deleteGroup, inputGroup } from './group';

// import fieldsets from './fieldsets';
// import { status } from '../common/common';
// import { combineReducers } from 'redux';
// import { requestFn } from '../common/request';

const initState = {
  step:1,
  fieldsets:[{
    name:'标题1',
    groups:[]
  },{
    name:'标题2',
    groups:[]
  },{
    name:'标题3',
    groups:[]
  },{
    name:'标题4',
    groups:[]
  }]
};

const receiveHanlder = (state,action)=>{
  if(action.key=="diet_get"){
    if(action.data.code == 0 && action.data.data) {
      return Object.assign({},state,{
        code : action.data.code,
        fieldsets : action.data.data.fieldsets
      });
    }else if(action.data.code == 0 && !action.data.data){
      return Object.assign({},state,{
        code : action.data.code,
        fieldsets : initState.fieldsets
      });
    }else{
      return Object.assign({},state,{
        code : action.data.code,
        msg : action.data.msg
      });
    }
  }else if(action.key=="diet_post"){
    if(action.data.code == 0) {
      return Object.assign({},state,{
        code : action.data.code,
        step : 2,
      });
    }else{
      return Object.assign({},state,{
        code : action.data.code,
        msg : action.data.msg
      });
    }
  }

  return state;
}

export default createReducer(initState,{
  [RECEIVE_POSTS](state,action){
    return receiveHanlder(state,action)
  },
  [actionTypesApp.ADD_GROUP](state,action){
    return Object.assign({},state,{
      "fieldsets" : addGroup(state.fieldsets,action)
    });
  },
  [actionTypesApp.DELETE_GROUP](state,action){
    return Object.assign({},state,{
      "fieldsets" : deleteGroup(state.fieldsets,action)
    });
  },
  [actionTypesApp.INPUT_GROUP](state,action){
    return Object.assign({},state,{
      "fieldsets" : inputGroup(state.fieldsets,action)
    });
  }
});
