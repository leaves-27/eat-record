export function addGroup(state,action){
  let fieldsets = state.data.data.fieldsets.map(function(item,index){
    let result = JSON.parse(JSON.stringify(item));

    if(index == action.index) {
      result.groups.push({
        name:"",
        value:""
      });
    }

    return result;
  });

  return {
    code:state.data.code,
    data:{
      fieldsets:fieldsets,
      status:state.data.data.status
    }
  };
}

export function deleteGroup(state,action){
  let fieldsets = state.data.data.fieldsets.map(function(item,index){
    let result = JSON.parse(JSON.stringify(item));

    if(index == action.pIndex){
      result.groups.splice(action.cIndex,1);
    }

    return result;
  });

  return {
    code:state.data.code,
    data:{
      fieldsets:fieldsets,
      status:state.data.data.status
    }
  };
}

export function inputGroup(state,action){
  let fieldsets = state.data.data.fieldsets.map(function(item,index){
    let result = JSON.parse(JSON.stringify(item));

    if(index == action.pIndex){
      var oldGroup = result.groups[action.cIndex];
      var newGroup = {};

      if(action.target.name == "0") {
        newGroup = Object.assign({},oldGroup,{
          name:action.target.value
        });
      }else if(action.target.name == "1"){
        newGroup = Object.assign({},oldGroup,{
          value:action.target.value
        });
      }

      result.groups[action.cIndex] = newGroup;
    }

    return result;
  });

  return {
    code : state.data.code,
    data : {
      fieldsets : fieldsets,
      status : state.data.data.status
    }
  };
}