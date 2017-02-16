/*
** 该方法用于对get请求返回的数据的处理
** author: leaves-27
** date: 2017-01-23
*/

const initState = {
  status:0,
  fieldsets:[{
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
  }]
};

export  function get(state = {},action){
  switch (action.key) {

    case "articles":
      return action.data;

    case "diet":
      if(action.data.code == 1 || (action.data.code == 0 && !action.data.data)){
        let data = {
          code:action.data.code,
          data:initState
        };
        action.data = data;
      }
      
      return Object.assign({},state,action.data);
    default :
      return state;
  }
}