import { requireComponent } from '../../common/utils';

module.exports = {
  path: 'login',
  getComponent : (nextState, cb)=>{
    requireComponent(cb,'../../common/containers/login','login')
    // require.ensure([], (require) => {
    //   cb(null, require('../../common/containers/login').default)
    // },'login');
  }
}