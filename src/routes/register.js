export default {
  path: 'register',
  getComponent : (nextState, cb)=>{
    require.ensure([], (require) => {
      cb(null, require('../containers/register').default)
    },'register');
  }
}