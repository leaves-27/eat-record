module.exports = {
  path: 'detail/:date',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../../common/containers/detail').default)
    })
  }
}