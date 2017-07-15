import { createReducer } from 'redux-convenient-utils';
import * as Backend from '../../actions/backend';
import * as RequestBackend from '../../actions/request/backend';

import { addGroup , deleteGroup, inputGroup } from './group';

const actionTypesApp = Object.assign({},Backend.actionTypesApp,RequestBackend.actionTypesApp);

const initState = {
  step:1,
  fieldsets:[{
    name:'早餐',
    groups:[]
  },{
    name:'中餐',
    groups:[]
  },{
    name:'晚餐',
    groups:[]
  },{
    name:'其他',
    groups:[]
  }]
};

export default createReducer(initState,{
  [ actionTypesApp.BACKEND_REQUEST ](state,action){
    const temp = {
      isFetching : action.isFetching 
    }

    const request = Object.assign({},state.request,{
      backend : temp
    });

    return Object.assign({},state,{
      request : request
    });
  },
  [ actionTypesApp.BACKEND_SUCCESS ](state,action){
    
    const temp = {
      isFetching : action.isFetching,
      data : action.data
    }

    let backend;

    if(!state.request.backend){
      backend = temp;
    }else{
      backend = Object.assign({},state.request.backend,temp);
    }

    const request = Object.assign({},state.request,{
      backend : backend
    });

    return Object.assign({},state,{
      request : request
    });
  },
  [ actionTypesApp.BACKEND_FAILURE ](state,action){

    const temp = {
      isFetching : action.isFetching,
      errorMsg : action.errorMsg
    }

    let backend;

    if(!state.request.backend){
      backend = temp;
    }else{
      backend = Object.assign({},state.request.backend,temp);
    }

    const request = Object.assign({},state.request,{
      backend : backend
    });

    return Object.assign({},state,{
      request : request,
      fieldsets : request.backend.data
    });
  },
  [ actionTypesApp.BACKEND_POST_ARTICLE_REQUEST ](state,action){
    const temp = {
      isFetching : action.isFetching 
    }

    const request = Object.assign({},state.request,{
      backendPostArticle : temp
    });

    return Object.assign({},state,{
      request : request
    });
  },
  [ actionTypesApp.BACKEND_POST_ARTICLE_SUCCESS ](state,action){
    
    const temp = {
      isFetching : action.isFetching,
      data : action.data
    }

    let backendPostArticle;

    if(!state.request.backendPostArticle){
      backendPostArticle = temp;
    }else{
      backendPostArticle = Object.assign({},state.request.backendPostArticle,temp);
    }

    const request = Object.assign({},state.request,{
      backendPostArticle : backendPostArticle
    });

    return Object.assign({},state,{
      request : request
    });
  },
  [ actionTypesApp.BACKEND_POST_ARTICLE_FAILURE ](state,action){

    const temp = {
      isFetching : action.isFetching,
      errorMsg : action.errorMsg
    }

    let backend;

    if(!state.request.backend){
      backend = temp;
    }else{
      backend = Object.assign({},state.request.backend,temp);
    }

    const request = Object.assign({},state.request,{
      backend : backend
    });

    return Object.assign({},state,{
      request : request
    });
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
