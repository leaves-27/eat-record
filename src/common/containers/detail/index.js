import React,{ Component,PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../../components/header/index';
import Group from '../../components/group/index';
import Message from '../../components/message/index';

import * as actionType from '../../actions/index';
import * as asyncAction from '../../actions/async';

class Detail extends Component{
  componentDidMount(){
    const { actions } = this.props;
    actions.getList("articles");
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
  getStep2(articles,index){
    let fieldsets = this.getNewFieldset(articles.data.data[index].fieldsets);

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
    let result;

    const { articles,login } = this.props;

    if(!articles || !articles.data || articles.data.code!=0){
      result = (
        <Message msg="数据获取失败，请稍后刷新页面重新获取数据" />
      )
    }else{
      result = this.getStep2(articles,this.props.params.id);
    }

    return (
      <div className="detail">
        <Header login={ login } />
        { result }
      </div>
    );  
  }
};

const mapStateToProps = (state,ownProps) => { //将store中特定的值绑定到子组件上
  return {
    articles:state.articles,
    login : state.login
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({
      getList:asyncAction.getList
    },dispatch)
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Detail);
