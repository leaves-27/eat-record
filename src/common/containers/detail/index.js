import React,{ Component,PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../../components/header/index';
import Message from '../../components/message/index';

import * as actionType from '../../actions/index';
import * as asyncAction from '../../actions/async';

class Detail extends Component{
  constructor(props){
    super(props)
  }
  
  static fetchData(state){
    const { actions } = this.props;
    actions.getDetail("detail",this.props.params.date);
  }

  componentDidMount(){
    this.constructor.fetchData(this.props);
  }
  getNewFieldset(fieldsets){
    let _self = this;
    const newFieldset = fieldsets.map(function(item,index){
      return (
        <fieldset key={ "fieldset_"+index }>
          <h3>{ item.name } </h3>
          <table className="table table-bordered">
            <tbody>
              { _self.getGroups(item.groups) }
            </tbody>
          </table>
        </fieldset>
      );
    });
    return newFieldset;
  }
  getGroups(groups){
    let newGroups = groups.map(function(item,index){
      return (
        <tr key={ index }>
          <td className="success">{ item.name } </td>
          <td> { item.value } </td>
        </tr>
      );
    });
    return newGroups;
  }
  getStep2(detail,date){
    let fieldsets = this.getNewFieldset(detail.fieldsets);

    return ( 
      <div className="form-horizontal">
        <div className="fieldsets">
          { fieldsets }
        </div>
      </div>
    )
  }
  render(){
    let _self = this;

    const { detail,login,actions,location  } = this.props;
    let result;
    if(detail.date) {
      result = this.getStep2(detail,this.props.params.date)  
    }else{
      result = (
        <Message msg="正在加载中，请稍等..." />
      )
    }

    return (
      <div className="detail">
        <Header login={ login } loginout={ actions.loginout } location={location} />
        { result }
      </div>
    );  
  }
};

const mapStateToProps = (state,ownProps) => { //将store中特定的值绑定到子组件上
  return {
    detail:state.detail,
    login : state.login
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({
      getDetail:asyncAction.getDetail,
      loginout : asyncAction.loginout
    },dispatch)
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Detail);
