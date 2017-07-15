import React,{ Component,PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actionTypesApp from '../../actions/user';
// import * as asyncAction from '../../actions/async';

// import Header from '../../components/header/index';
// import Message from '../../components/message/index';
// import * as Validation from "../../reducer/validation";

class Login extends Component{
  constructor(props, context) {
     super(...arguments)
  }

  getError(request){
    if(request && request.login && request.login.errorMsg) {
      return (
        <div className="col-sm-12">
          <div className="alert alert-error alert-danger text-center" style={{ "paddingTop":"5px","paddingBottom":"5px",marginBottom:"5px" }}>
            <a className="close" data-dismiss="alert">×</a>
            <strong>错误!</strong>{ request.login.errorMsg }.
          </div>
        </div>
      );
    }else{
      return (<div></div>)
    }
  }

  changeHanlder(event){
    const { actions } = this.props;

    if(event.target.name=="name"){
      actions.setName(event.target.value)
    }

    if(event.target.name=="password"){
      actions.setPassword(event.target.value)
    }
  }

  goLogin(){
    const { actions,login } = this.props;

    actions.goLogin(login.user);
  }

  componentWillUpdate(nextProps, nextState){
    const { actions,login } = this.props;

    if(login.request && login.request.login && login.request.login.isLogin){
      this.context.router.push("/list")
    }
    
    return true;
  }
  render(){
    const { actions,login } = this.props;
    let result;

    // if(login.request && login.request.login && login.request.login.isLogin){
    //   this.context.router.push("/list")
    // }

    return (
      <div className>
        <div className="dialog">
          <div className="panel panel-default">
            <div className="panel-heading">
              登录
            </div>
            <div className="panel-body">
              <form className="form-horizontal login">
                <div className="form-group">
                  <label htmlFor="inputEmail3" className="col-sm-3 control-label">用户名</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" name="name" id="name" onChange={ this.changeHanlder.bind(this) } placeholder="用户名" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="col-sm-3 control-label" value={login.user.password}>密码</label>
                  <div className="col-sm-9">
                    <input type="password" className="form-control" name="password"  id="password" onChange={ this.changeHanlder.bind(this) } placeholder="密码" />
                  </div>
                </div>
                <div className="form-group" style={{marginBottom:"5px"}}>
                  {
                    this.getError(login.request)
                  }
                </div>
                <div className="form-group">
                  <div className="col-sm-12">
                    <button type="button" className="btn btn-success btn-block" onClick={ this.goLogin.bind(this) }>登陆</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state,ownProps) => { //将store中特定的值绑定到子组件上
  return {
    login : state.login
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({
      goLogin : actionTypesApp.goLogin,
      setName : actionTypesApp.setName,
      setPassword : actionTypesApp.setPassword
    },dispatch)
  };
};

Login.contextTypes = {
    router: PropTypes.object
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
