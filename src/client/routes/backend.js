module.exports = {
  path: 'backend',
  getComponent:(nextState, cb) =>{
    require.ensure([], (require) => {
      cb(null, require('../../common/containers/backend').default)
    },'backend')
  }
}