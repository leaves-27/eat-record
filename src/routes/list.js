export default  {
  path: '/list',
  getComponents : (location, callback)=> {
    require.ensure([],(require) => {
      callback(null,require('../containers/list').default)
    },'list')
  }
}