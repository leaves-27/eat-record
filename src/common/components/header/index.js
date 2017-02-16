import React,{ Component} from 'react';

export default class Header extends Component{
  constructor(props){
    super(props);
  }
  render(){
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
          <div className="navbar-collapse collapse" role="navigation">
            <ul className="nav navbar-nav navbar-right hidden-sm">
              <li><a href="/web/login">登陆</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
