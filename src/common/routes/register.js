import { requireComponent } from '../../common/utils';

module.exports = {
  path: 'register',
  getComponent : (nextState, cb)=>{
    requireComponent(cb,'../../common/containers/register','register')
    // require.ensure([], (require) => {
    //   cb(null, require('../../common/containers/register').default)
    // },'register');
  }
}