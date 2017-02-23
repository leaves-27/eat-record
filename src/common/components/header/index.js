import React,{ Component} from 'react';

export default class Header extends Component{
  constructor(props){
    super(props);
  }
  render(){
    let { login,loginout } = this.props;
    let result;

    if(login.status==1){
      result = (
        <div className="navbar-collapse collapse" role="navigation">
          <ul className="nav navbar-nav hidden-sm">
            <li><a href="/web/backend">创建文章</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right hidden-sm">
            <li><a onClick={ loginout } href="javascript:void(0)">退出</a></li>
          </ul>
        </div>
      )
    }else{
      result = (
        <div className="navbar-collapse collapse" role="navigation">
          <ul className="nav navbar-nav navbar-right hidden-sm">
            <li><a href="/web/login">登陆</a></li>
          </ul>
        </div>
      )
    };

    return (
      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand hidden-sm" href="/web/">首页</a>
          </div>
          { result }
        </div>
      </div>
    )
  }
}
