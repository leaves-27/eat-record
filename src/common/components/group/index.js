import React,{ Component} from 'react';
import { Link } from 'react-router';
import { isEmptyObject } from '../../utils';

export default class Group extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let { pIndex,cIndex,deleteGroup,inputGroup,input } = this.props;
    let _self = this;

    return (
      <div className="group">
        <div className="form-group">
          <div className="col-sm-6">
            <input name="0" className="form-control" type="text" value={ input.name } placeholder="输入名称" onChange={ inputGroup.bind(this,pIndex,cIndex) } />
          </div>
          <div className="col-sm-6">
            <input name="1" className="form-control" type="text" value={ input.value } placeholder="输入数量" onChange={ inputGroup.bind(this,pIndex,cIndex) } />
          </div>
        </div>
        <div className="text-right row">
          <div className="col-sm-12">
            <button type="button" className="btn btn-primary btn-block" onClick={ deleteGroup.bind(_self,pIndex,cIndex) }>删除</button>
          </div>
        </div>
      </div>
    );
  }
}
