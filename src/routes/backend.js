export default {
  path: 'backend',
  getComponent:(location, cb) =>{
    require.ensure([], (require) => {
      cb(null, require('../containers/backend').default)
    },'backend')
  }
}