import React,{ Component,PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionType from '../../actions/index';
import Group from '../../components/group/index';
import Message from '../../components/message/index';

class Detail extends Component{
  componentDidMount(){
    const { actions } = this.props;
    actions.getList("articles");
  }
  countGroups(groups){
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
  render(){
    const { articles,actions } = this.props;
    let _self = this;
    

    if (!articles || !articles.data){
      return (
        <div></div>
      )
    };

    if(articles.data.code!=0){
      //数据获取失败，请稍后刷新页面重新获取数据
      return (
        <Message msg="数据获取失败，请稍后刷新页面重新获取数据" />
      )
    }

    let id = this.props.params.id;
    let fieldsets = articles.data.data[this.props.params.id].fieldsets;

    const newFieldset = fieldsets.map(function(item,index){
      return (
        <fieldset key={ "fieldset_"+index }>
          <h3>{ item.name } </h3>
          <table className="table table-bordered">
            <tbody>
              { _self.countGroups(item.groups) }
            </tbody>
          </table>
        </fieldset>
      );
    });

    return ( 
      <div className="form-horizontal">
        <div className="fieldsets">
          { newFieldset }
        </div>
      </div>
    );    
  }
};

const mapStateToProps = (state,ownProps) => { //将store中特定的值绑定到子组件上
  return {
    articles:state.entries.articles
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({
      getList:actionType.getList,
      getBack:actionType.getBack
    },dispatch)
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Detail);
