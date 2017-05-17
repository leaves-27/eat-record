import { requireComponent } from '../../common/utils';

module.exports = {
  path: 'backend',
  getComponent:(nextState, cb) =>{
    requireComponent(cb,'../../common/containers/backend','backend')
    
    // if(_SERVER_) {
    //   cb(null, require('../../common/containers/backend').default)
    // }else{
    //   require.ensure([], (require) => {
    //     cb(null, require('../../common/containers/backend').default)
    //   },'backend')
    // }
  }
}