import { requireComponent } from '../utils';

module.exports = {
  path: 'login',
  getComponent : (nextState, cb)=>{
    requireComponent(cb,'../containers/login','login')
    // require.ensure([], (require) => {
    //   cb(null, require('../../common/containers/login').default)
    // },'login');
  }
}