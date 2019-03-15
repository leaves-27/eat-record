import React,{ Component,PropTypes } from 'react';

class App extends Component{
  render(){
    var login = {};
    var articles = [];
    return (
      <div className="app">
        <div className="container-fluid main">
          {this.props.children }
        </div>
      </div>
    )
  }
};


export default App;
