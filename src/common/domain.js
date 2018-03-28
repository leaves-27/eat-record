/*
* desc : 不同环境调用的域名配置
*   urlPrefix : 调用的后端接口的地址前缀
*   staticUrlPrefix : 该静态资源的访问地址
*
* author : dong.keke
* time : 2017-11-28
*/

let config = null;

if(process.env.NODE_ENV=="production"){
  config = {
    prefixUrl : "//funnyxiu.com/"
  }
}else if(process.env.NODE_ENV=="test"){
  config = {
    prefixUrl : "//funnyxiu.com/"
  }
}else{
  config = {
    prefixUrl : "http://localhost:3000/"
  }
}

module.exports = config;