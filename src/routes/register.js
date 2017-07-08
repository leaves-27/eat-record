export default {
  path: 'register',
  getComponent : (location, cb)=>{
    require.ensure([], (require) => {
      cb(null, require('../containers/register').default)
    },'register');
  }
}