export function validationLogin(login){
  if(!(login && && login.data && login.data.code == 0)){
    browserHistory.push("login");
  }
}