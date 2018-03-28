import React,{ Component,PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Api from '../../api/login'

import * as actionType from '../../actions/index';

// import Header from '../../components/header/index';
// import Message from '../../components/message/index';
// import * as Validation from "../../reducer/validation";

class Login extends Component{
  constructor(props) {
    super(props);

    this.state = {
      name : "",
      password : "",
      errorMsg : ""
    };
  }

  changeHanlder(event){
    this.state[evnet.id] = evnet.value;
  }

  postLogin(){
    const { actions } = this.props;
    Api.login.then((result)=>{
      if(result.code==0){
        actions.setUser(result.data.name,result.data.imageUrl);
        this.router.push({
          path : "/"
        });
      }
    });
  }

  render(){

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
                  <input type="text" className="form-control" name="name" id="name" onChange={ this.changeHanlder } placeholder="用户名" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password" className="col-sm-2 control-label">密码</label>
                <div className="col-sm-10">
                  <input type="password" className="form-control" name="password"  id="password" onChange={ this.changeHanlder } placeholder="密码" />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="button" className="btn btn-default" onClick={ this.postLogin }>登陆</button>
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
//     user : state.user
//   };
// };

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({
      setUser : actionType.setUser
    },dispatch)
  };
};

export default connect(null,mapDispatchToProps)(Login);
