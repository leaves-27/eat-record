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
  constructor(props) {
    super(props);
    this.state = {
      name : "",
      password : "",
      rePassword : "",
      email : ""
    };
  }

  validation(){
    const { user,actions } = this.props;

    if(!user.name){
      console.log("用户名不能为空");
      return ;
    }

    if(!user.password){
      console.log("密码不能为空");
      return ;
    }

    if(!user.repassword){
      console.log("确认密码不能为空");
      return ;
    }

    if(!user.email){
      console.log("邮箱不能为空");
      return ;
    }

    if(user.password == user.repassword){
      console.log("两个密码不一致");
      return ;
    }

    // actions.postRegister();
  }

  changeHanlder(event){
    this.state[evnet.id] = evnet.value;
  }

  postRegister(){
    const { actions } = this.props;
    Api.register.then((result)=>{
      if(result.code==0){
        this.router.push({
          path : "/login"
        });
      }
    });
  }

  render(){
    let result = this.getRegistBox();
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
                  <input type="email" className="form-control" name="email" id="email" placeholder="邮箱" onChange={ this.changeHanlder }  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputEmail3" className="col-sm-3 control-label">用户名</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name="name" id="name" placeholder="用户名" onChange={this.changeHanlder }  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password" className="col-sm-3 control-label" value="">密码</label>
                <div className="col-sm-9">
                  <input type="password" className="form-control" name="password"  id="password" placeholder="密码" onChange={ this.changeHanlder } />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="repassword" className="col-sm-3 control-label" value="">确认密码</label>
                <div className="col-sm-9">
                  <input type="password" className="form-control" name="repassword"  id="repassword" placeholder="确认密码" onChange={ this.changeHanlder }  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-3 col-sm-9">
                  <button type="button" className="btn btn-default" onClick={ this.postRegister }>注册</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
};

// const mapStateToProps = (state,ownProps) => { //将store中特定的值绑定到子组件上
//   return {
//     register : state.register
//   };
// };


// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     actions: bindActionCreators({
//       registerChangeUser : actionType.registerChangeUser,
//       postRegister : asyncAction.postRegister
//     },dispatch)
//   };
// };

export default Register;
