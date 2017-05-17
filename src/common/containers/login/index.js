import React,{ Component,PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actionType from '../../actions/index';
import * as asyncAction from '../../actions/async';

import Header from '../../components/header/index';
import Message from '../../components/message/index';
// import * as Validation from "../../reducer/validation";

class Login extends Component{
  constructor(props){
    super(props)
  }
  
  static fetchData(state){
    const { actions } = this.props;
    actions.resetState();
  }

  componentDidMount(){
    this.constructor.fetchData(this.props);
  }
  getLoginBox(login,actions){
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
                <label htmlFor="password" className="col-sm-2 control-label" value={login.user.password}>密码</label>
                <div className="col-sm-10">
                  <input type="password" className="form-control" name="password"  id="password" onChange={ actions.changeUser.bind(this) } placeholder="密码" />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="button" className="btn btn-default" onClick={ actions.postLogin }>登陆</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
  render(){
    const { actions,login,location } = this.props;
    let result;

    if(login.code && login.code!=0){
      result = (
        <div>
          <Message msg={ login.msg } />
          { this.getLoginBox(login,actions) }
        </div>
      )
    }else{
      result = this.getLoginBox(login,actions);
    }

    return (
      <div className>
        <Header login={ login } loginout={ actions.loginout } location={location}/>
        { result }
      </div>
      
    )
  }
};

const mapStateToProps = (state,ownProps) => { //将store中特定的值绑定到子组件上
  return {
    login:state.login
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({
      postLogin:asyncAction.postLogin,
      changeUser:actionType.changeUser,
      resetState:actionType.resetState,
      loginout:asyncAction.loginout
    },dispatch)
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);
