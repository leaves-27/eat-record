export function addGroup(state,action){
  let fieldsets = state.map(function(item,index){
    let result = JSON.parse(JSON.stringify(item));

    if(index == action.index) {
      result.groups.push({
        name:"",
        value:""
      });
    }

    return result;
  });

  return fieldsets;
}

export function deleteGroup(state,action){
  let fieldsets = state.map(function(item,index){
    let result = JSON.parse(JSON.stringify(item));

    if(index == action.pIndex){
      result.groups.splice(action.cIndex,1);
    }

    return result;
  });

  return fieldsets;
}

export function inputGroup(state,action){
  let fieldsets = state.map(function(item,index){
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

  return fieldsets;
}