import React,{ Component,PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actionType from '../../actions/index';
import * as asyncAction from '../../actions/async';

import Header from '../../components/header/index';
import Message from '../../components/message/index';
// import * as Validation from "../../reducer/validation";

class Register extends Component{
  getRegistBox(){
    const { actions } = this.props;
    
    return (
      <div className="dialog">
        <div className="panel panel-default">
          <div className="panel-heading">
            注册
          </div>
          <div className="panel-body">
            <form className="form-horizontal login">
              <div className="form-group">
                <label htmlFor="inputEmail3" className="col-sm-3 control-label">邮箱</label>
                <div className="col-sm-9">
                  <input type="email" className="form-control" name="email" id="email" placeholder="邮箱" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputEmail3" className="col-sm-3 control-label">用户名</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name="name" id="name" placeholder="用户名" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password" className="col-sm-3 control-label" value="">密码</label>
                <div className="col-sm-9">
                  <input type="password" className="form-control" name="password"  id="password" placeholder="密码" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="repassword" className="col-sm-3 control-label" value="">确认密码</label>
                <div className="col-sm-9">
                  <input type="password" className="form-control" name="repassword"  id="repassword" placeholder="确认密码" />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-3 col-sm-9">
                  <button type="button" className="btn btn-default" onClick={ actions.postRegister }>注册</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
  render(){
    let result = this.getRegistBox();
    return (
      <div className>
        { result }
      </div>
    )
  }
};

const mapStateToProps = (state,ownProps) => { //将store中特定的值绑定到子组件上
  return {
    register : state.register
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({
      postRegister : asyncAction.postRegister
    },dispatch)
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Register);
