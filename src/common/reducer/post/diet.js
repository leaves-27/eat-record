export function diet(state,action){
  let data;

  if(action.data.code == 0 ) {
    data = Object.assign({},action.data,{
      status:1
    });
  }else{
    data = action.data;
  };

  let diet = Object.assign({},state,{
    didInvalidate: true,
    isFetching:false,
    data:data
  });

  return diet;
};