
import { createReducer } from 'redux-convenient-utils';
import * as Detail from '../../actions/detail';
import * as RequestDetail from '../../actions/request/detail';

const actionTypesApp = Object.assign({},Detail.actionTypesApp,RequestDetail.actionTypesApp);

const initState = [];
export default createReducer(initState,{
  [ actionTypesApp.DETAIL_REQUEST ](state,action){
    const temp = {
      isFetching : action.isFetching 
    }

    const request = Object.assign({},state.request,{
      detail : temp
    });

    return Object.assign({},state,{
      request : request
    });
  },
  [ actionTypesApp.DETAIL_SUCCESS ](state,action){
    
    const temp = {
      isFetching : action.isFetching,
      data : action.data
    }

    let detail;

    if(!state.request.detail){
      detail = temp;
    }else{
      detail = Object.assign({},state.request.detail,temp);
    }

    const request = Object.assign({},state.request,{
      detail : detail
    });

    return Object.assign({},state,{
      request : request
    });
  },
  [ actionTypesApp.DETAIL_FAILURE ](state,action){

    const temp = {
      isFetching : action.isFetching,
      errorMsg : action.errorMsg
    }

    let detail;

    if(!state.request.detail){
      detail = temp;
    }else{
      detail = Object.assign({},state.request.detail,temp);
    }

    const request = Object.assign({},state.request,{
      detail : detail
    });

    return Object.assign({},state,{
      request : request
    });
  }
});