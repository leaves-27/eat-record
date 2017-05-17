import { requireComponent } from '../../common/utils';

module.exports = {
  path: 'detail/:date',
  getComponent : (nextState, cb) =>{
    requireComponent(cb,'../../common/containers/detail','detail')
    // require.ensure([], (require) => {
    //   cb(null, require('../../common/containers/detail').default)
    // },'detail')
  }
}