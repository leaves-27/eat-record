module.exports = {
  path: 'backend',
  getComponent:(nextState, cb) =>{
    require.ensure([], (require) => {
      cb(null, require('../containers/backend').default)
    },'backend')
  }
}
