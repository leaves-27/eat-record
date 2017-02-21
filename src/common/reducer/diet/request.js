export function request(state,action){
  let diet = {
    data:action.data
  };

  if(action.method == "POST"){ //提交数据成功
    if(action.data && action.data.code==0) {
      diet = Object.assign({},diet,{
        status : 1
      });
    };

    return Object.assign({},state,diet);
  }else{
    let data;
    if(action.data && action.data.code == 0 && !action.data.data){
      const initState = {
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

      data = {
        code : action.data.code,
        data : initState
      }
    }

    return Object.assign({},state,{
      data : Object.assign({},diet.data,data)
    });
  };
}