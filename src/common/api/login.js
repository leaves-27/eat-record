import axios from 'Axios'
import Config from '../domain'

export default {
  get(name,password,callback){
    /*
    * desc : 进行登录
    * params : 
    *   name : 登录的账户
    *   password :登录账户的密码
    *   callback : 成功后的回调函数
    * author : dong.keke
    * time : 2017-11-28
    */

    let url = Config.urlPrefix + "/login";

    return axios.post(url,{
      "name" : name,
      "password" : password
    });

  },
  getOut(callback){
    /*
    * desc : 退出登录
    * params : 
    *   callback : 成功后的回调函数
    * author : dong.keke
    * time : 2017-11-28
    */

    let url = Config.urlPrefix + "gaea/logout";
    return axios.get(url);
  }
}