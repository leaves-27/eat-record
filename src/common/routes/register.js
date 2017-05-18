import { requireComponent } from '../utils';

module.exports = {
  path: 'register',
  getComponent : (nextState, cb)=>{
    requireComponent(cb,'../containers/register','register')
    // require.ensure([], (require) => {
    //   cb(null, require('../../common/containers/register').default)
    // },'register');
  }
}