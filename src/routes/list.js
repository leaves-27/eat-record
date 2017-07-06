export default  {
  path: 'list',
  getComponent : (nextState, cb) =>{
    require.ensure([],(require) => {
      cb(null,require('../../common/containers/list').default)
    },'list')
  }
}