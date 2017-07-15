
import { createReducer } from 'redux-convenient-utils';
import * as List from '../../actions/list';
import * as RequestList from '../../actions/request/list';

const actionTypesApp = Object.assign({},List.actionTypesApp,RequestList.actionTypesApp);

const initState = [];
export default createReducer(initState,{
  [ actionTypesApp.LIST_REQUEST ](state,action){
    const temp = {
      isFetching : action.isFetching 
    }

    const request = Object.assign({},state.request,{
      list : temp
    });

    return Object.assign({},state,{
      request : request
    });
  },
  [ actionTypesApp.LIST_SUCCESS ](state,action){
    
    const temp = {
      isFetching : action.isFetching,
      data : action.data
    }

    let list;

    if(!state.request.list){
      list = temp;
    }else{
      list = Object.assign({},state.request.list,temp);
    }

    const request = Object.assign({},state.request,{
      list : list
    });

    return Object.assign({},state,{
      request : request
    });
  },
  [ actionTypesApp.LIST_FAILURE ](state,action){

    const temp = {
      isFetching : action.isFetching,
      errorMsg : action.errorMsg
    }

    let list;

    if(!state.request.list){
      list = temp;
    }else{
      list = Object.assign({},state.request.list,temp);
    }

    const request = Object.assign({},state.request,{
      list : list
    });

    return Object.assign({},state,{
      request : request
    });
  }
});