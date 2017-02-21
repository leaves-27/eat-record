import { REQUEST_POSTS ,RECEIVE_POSTS } from '../../actions/network';
import { requestFn } from './request';

/*
** 初始化fieldsets数据
**/
const initFieldsets = ()=>{
  const fieldsets =[{
    name:'标题1',
    groups:[]
  },{
    name:'标题2',
    groups:[]
  },{
    name:'标题3',
    groups:[]
  },{
    name:'标题4',
    groups:[]
  }];

  return fieldsets;
}

/*
** 服务器响应的数据值大致可以分为三种情况：
** 1.查询数据过程出错，返回错误信息；
** 2.查询数据过程没有出错，但没查到需要的数据，返回null。
** 3.查到数据过程没有出错，查到需要的数据，返回需要的正确数据；
**/
const getDataDataHanlder = (state={},action,callBack)=>{
  if(action.data && action.data.code==0){
    return Object.assign({},state,{
      data : action.data.data
    });
  }else if(action.data && action.data.code==0 && !action.data.data){
    return Object.assign({},state,{
      data : callBack()
    });
  }else{
    let msg = "获取数据过程出现错误，请稍后再试或联系网站管理员";
    if(action.data && action.data.msg){
      msg = action.data.msg
    };

    return Object.assign({},state,{
      msg : msg
    });
  }
}

/*
* 公用的status业务逻辑处理
**/
const statusHanlder = (state,action)=>{
  let status = 0;

  if(action.data.code==0){
    status = 1;
  }

  return Object.assign({},state,{
    status : status
  });
}

export const status = (state = {} ,action)=>{
  if(action.type == RECEIVE_POSTS){
    return requestFn(state,action,postHanlder);
  }

  return requestFn(state,action);
}