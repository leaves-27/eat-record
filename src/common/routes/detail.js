import { requireComponent } from '../utils';

module.exports = {
  path: 'detail/:date',
  getComponent : (nextState, cb) =>{
    requireComponent(cb,'../containers/detail','detail')
    // require.ensure([], (require) => {
    //   cb(null, require('../../common/containers/detail').default)
    // },'detail')
  }
}