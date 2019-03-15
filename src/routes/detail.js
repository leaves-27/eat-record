module.exports = {
  path: 'detail/:date',
  getComponent : (nextState, cb) =>{
    require.ensure([], (require) => {
      cb(null, require('../containers/detail').default)
    },'detail')
  }
}
