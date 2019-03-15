import { REQUEST_POSTS ,RECEIVE_POSTS } from '../../actions/network';
import { createReducer } from 'redux-convenient-utils';

const initState = {}
export default createReducer(initState,{
  [ RECEIVE_POSTS ](state, action) {
    if(action.key!="detail"){
      return state;
    }
    if(action.data.code == 0) {
      return Object.assign({},state,action.data.data);
    }else{
      return Object.assign({},state,initState);
    }
  }
});