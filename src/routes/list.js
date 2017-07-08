export default  {
  path: 'list',
  getComponent : (location, cb) =>{
    require.ensure([],(require) => {
      cb(null,require('../containers/list').default)
    },'list')
  }
}