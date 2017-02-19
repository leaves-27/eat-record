import { actionTypesApp } from '../../actions/index';
import { addGroup , deleteGroup, inputGroup } from './group';
import { getPreHanlder } from '../common/pretreatment';

export function fieldsets(state,action){
  switch (action.type){
    
    case actionTypesApp.ADD_GROUP:
      return getPreHanlder(state,action,"diet",addGroup);
    
    case actionTypesApp.DELETE_GROUP:
      return getPreHanlder(state,action,"diet",deleteGroup);
    
    case actionTypesApp.INPUT_GROUP:
      return getPreHanlder(state,action,"diet",inputGroup);

    case actionTypesApp.DELETE_DIET:
      return Object.assign({},state,{
        "diet" : {}
      });

    default:
      return state;
  }
}