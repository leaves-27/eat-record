/*
* desc : 所有调用后端接口的请求的拦截器。分为两部分：
*   1、对请求发出状态进行拦截处理；
*   2、对请求回来后的响应进行拦截处理。
* author : dong.keke
* time : 2017-11-28
*/

import axios from 'axios'
// import Cookie from './common/cookie'
// import router from './router'
// import config from './domain'

// 超时时间
axios.defaults.timeout = 50000;
// axios.defaults.headers.common['Authorization'] = Cookie.get("token");

let loadinginstace;
// http请求拦截器
axios.interceptors.request.use(config => {
  // if(!loadinginstace){
  //   loadinginstace = Loading.service({ fullscreen: true });
  // }
  return config;
}, error => {
  // loadinginstace.close();
  // Message.error({
  //   message: '加载超时'
  // });

  return Promise.reject(error)
})

// http响应拦截器
axios.interceptors.response.use(data => {// 响应成功关闭loading
  // loadinginstace.close();

  // if(data.data.code!=0){
  //   Message.error({
  //     message: data.data.msg
  //   });
  // }

  return data
}, error => {
  // loadinginstace.close();

  // if(error == "Error: Request failed with status code 401"){
  //   Cookie.set("token",undefined);
  //   router.push({
  //     path: "/login",
  //     query : {
  //       redirect : config.staticUrlPrefix + router.currentRoute.path.substr(1)
  //     }
  //   });
  // }else{
  //   Message.error({
  //     message: '加载数据失败，请重刷页面或联系管理员'
  //   });
  // }
  
  return Promise.reject(error)
})

export default axios;