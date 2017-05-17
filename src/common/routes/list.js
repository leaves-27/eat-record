import { requireComponent } from '../../common/utils';

module.exports = {
  path: 'list',
  getComponent : (nextState, cb) =>{
    requireComponent(cb,'../../common/containers/list','list')
    // require.ensure([],(require) => {
    //   cb(null,require('../../common/containers/list').default)
    // },'list')
  }
}