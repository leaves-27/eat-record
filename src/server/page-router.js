import * as actionType from '../common/actions/index';
import * as asyncAction from '../common/actions/async';
import Utils from './utils';

export default (renderProps)=>{
  let location = renderProps.location;
  let detail = '/detail/';

  let index = location.pathname.indexOf("detail");

  if ( index > 0) {
    var date = location.pathname.substr(8)
    detail = detail + date;
  }
  
  switch(location.pathname){
    case '/login':
      return  actionType.resetState();
    case '/backend':
      return  asyncAction.getDetail("diet_get",Utils.time.day);
    case '/':
      return  asyncAction.getList();
    case detail:
      let date = location.query.date;
      return  asyncAction.getDetail("detail",date);
    default:
      return  {};
  }
}