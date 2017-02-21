import * as actionType from '../common/actions/index';
import * as asyncAction from '../common/actions/async';
import Utils from './utils';

export default (renderProps)=>{
  let location = renderProps.location;
  console.log("location.pathname:",location.pathname);
  switch(location.pathname){
    case '/web/login':
      return  actionType.resetState();
    case '/web/backend':
      return  asyncAction.getDetail(Utils.time.day);
    case '/web/':
      return  asyncAction.getList();
    case '/web/detail/:date':
      let date = location.query.date
      return  asyncAction.getDetail(date);
    default:
      return {}
  }
}