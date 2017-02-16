import React,{ Component,PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Group from '../../components/group/index';
import Message from '../../components/message/index';
import Modal from '../../components/modal/index';

import * as actionType from '../../actions/index';
import * as asyncAction from '../../actions/async';

class Backend extends Component{
  constructor (props) {
    super(props);
  }
  
  componentDidMount(){
    const { actions } = this.props;
    actions.getDayDiet("diet");
  }

  getFieldset(temp){
    let fieldsets = [];
    let fieldset = (
      <div className="control-group">
        <label className="control-label">字段名</label>
        <div className="controls">
          <input type="text" placeholder="输入你想输入的字段值" />
        </div>
      </div>
    );

    for(let j=0; j< temp.fieldsets; j++){
      fieldsets.push(fieldset);
    }

    return fieldsets;
  }
  
  next(){
    const { actions } = this.props;
    //对用户创建的输入框进行验证。若没有输入，触发表单的错误提示

    let $modal = $('#myModal');
    $(".modal-body p",$modal).text("你确定你要提交吗？");
    $modal.on("hidden.bs.modal",function(e){
      actions.postArticle("diet");
    });
    $modal.modal({
      show:true
    });
    $(".confirm-btn",$modal).on("click",function(){
      $modal.modal('hide');  
    });
  }
  reload(){
    location.reload();
  }
  render(){
    const { diet,actions } = this.props;
    let _self = this;

    if (!diet || !diet.data || !diet.data.code!=0) {
      return (
        <Message msg="数据获取失败，请稍后刷新页面重新获取数据" />
      )
    }

    if (diet.data.code == 1) {
      return (<Message msg={diet.msg}/>);
    }

    if(diet.data.status && diet.data.status ==1){
      return (
        <div className="text-center btn-box">
          <div className="row">
            <div className="col-sm-6">
              <button type="button" className="btn btn-success btn-block" onClick={ _self.reload }>继续</button>
            </div>
            <div className="col-sm-6">
              <Link to="/web/" className="btn btn-danger btn-block">查看提交</Link>
            </div>
          </div>
        </div>
      );
    }

    const newFieldset = diet.data.data.fieldsets.map(function(item,index){
      let groups = [];

      for(let i=0; i< item.groups.length; i++){
        groups.push(<Group key={i} pIndex={index} cIndex={i} input={ item.groups[i] } deleteGroup={ actions.deleteGroup } inputGroup={ actions.inputGroup } />);
      }

      return (
        <fieldset key={ index }>
          <legend className="clearfix">{ item.name }<button type="button" className="btn btn-success pull-right" onClick={ actions.addGroup.bind(_self,index) }>添加</button></legend>
          <div className="groups">
            { groups }
          </div>
        </fieldset>
      );
    });

    return(
      <div className="backend">
        <form className="form-horizontal backend">
          <div className="fieldsets">
            { newFieldset }
          </div>
          <div className="control-group">
            <div className="controls">
              <button type="button" className="btn" onClick={ _self.next.bind(_self) }>提交</button>
            </div>
          </div>
        </form>
        <Modal />
      </div>
    )
  }
};

const mapStateToProps = (state,ownProps) => { //将store中特定的值绑定到子组件上
  return {
    diet:state.diet
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({
      addFieldset : actionType.addFieldset,
      addGroup : actionType.addGroup,
      deleteGroup : actionType.deleteGroup,
      inputGroup : actionType.inputGroup,
      getDayDiet : asyncAction.getDayDiet,
      postArticle : asyncAction.postArticle
    },dispatch)
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Backend);
