import React,{ Component,PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link,browserHistory } from 'react-router';

import * as actionType from '../../actions/index';
import Message from '../../components/message/index';
import * as Validation from "../../reducer/validation";

class Login extends Component{
  render(){
    const { actions,login,location } = this.props;
    Validation.login(login,location,this);

    return (
      <div className="dialog">
        <div className="panel panel-default">
          <div className="panel-heading">
            登录
          </div>
          <div className="panel-body">
            <form className="form-horizontal login">
              <div className="form-group">
                <label htmlFor="inputEmail3" className="col-sm-2 control-label">用户名</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" name="name" id="name" onChange={ actions.changeUser.bind(this) } placeholder="用户名" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password" className="col-sm-2 control-label">密码</label>
                <div className="col-sm-10">
                  <input type="password" className="form-control" name="password"  id="password" onChange={ actions.changeUser.bind(this) } placeholder="密码" />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-default" onClick={ actions.postLogin }>登陆</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state,ownProps) => { //将store中特定的值绑定到子组件上
  return {
    user:state.user,
    login:state.entries.login
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({
      postLogin:actionType.postLogin,
      changeUser:actionType.changeUser,
      loginValidation:actionType.loginValidation
    },dispatch)
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);
