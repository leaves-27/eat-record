export default {
  path: 'login',
  getComponent : (nextState, cb)=>{
    require.ensure([], (require) => {
      cb(null, require('../containers/login').default)
    },'login');
  }
}