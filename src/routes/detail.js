export default {
  path: 'detail/:date',
  getComponent : (location, cb) =>{
    require.ensure([], (require) => {
      cb(null, require('../containers/detail').default)
    },'detail')
  }
}