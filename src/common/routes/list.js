import { requireComponent } from '../utils';

module.exports = {
  path: 'list',
  getComponent : (nextState, cb) =>{
    requireComponent(cb,'../containers/list','list')
    // require.ensure([],(require) => {
    //   cb(null,require('../../common/containers/list').default)
    // },'list')
  }
}