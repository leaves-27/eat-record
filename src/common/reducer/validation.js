
/*
** 已登录：
** 1：在登录页面已登录，跳转到backend或有跳转链接的情况下跳转到跳转链接的页面
** 2：在其他页面已登录，继续在本页面渲染
** 未登录：
** 1:在登录页面未登录，继续渲染
** 2:在其他页面未登录，跳转到登录页面
*/

export function login(login,location){
  console.log("browserHistory",browserHistory)
  if(login && login.data && login.data.code == 0){
    if(location.pathname.indexOf("login") > 0 ){
      if(location && location.query && location.query.redirectUrl){
        browserHistory.push(location.query.redirectUrl);
      }else{
        browserHistory.push("backend");
      }
    }
  }else{
    if(location.pathname.indexOf("login") < 0 ){
      browserHistory.push("login?redirectUrl="+location.query.redirectUrl);
    }
  }
}