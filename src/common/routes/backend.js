import { requireComponent } from '../utils';

module.exports = {
  path: 'backend',
  getComponent:(nextState, cb) =>{
    requireComponent(cb,'../containers/backend','backend')
    
    // if(_SERVER_) {
    //   cb(null, require('../../common/containers/backend').default)
    // }else{
    //   require.ensure([], (require) => {
    //     cb(null, require('../../common/containers/backend').default)
    //   },'backend')
    // }
  }
}