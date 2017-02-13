import React,{ Component,PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actionType from '../../actions/index';
import Message from '../../components/message/index';

class Login extends Component{
  render(){
    const { actions } = this.props;
    return (
      <div>
        <form className="form-horizontal login">
          <div class="form-group">
            <label for="inputEmail3" class="col-sm-2 control-label">用户名</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" name="name" id="name" onChange={ actions.changeUser } placeholder="用户名" />
            </div>
          </div>
          <div class="form-group">
            <label for="password" class="col-sm-2 control-label">密码</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" name="password"  id="password" onChange={ actions.changeUser } placeholder="密码" />
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="button" class="btn btn-default" onClick={ actions.login }>登陆</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
};

const mapStateToProps = (state,ownProps) => { //将store中特定的值绑定到子组件上
  return {
    user:state.user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({
      login:actionType.login
    },dispatch)
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);
