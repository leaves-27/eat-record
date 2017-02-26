import React,{ Component,PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionType from '../actions/index';
import List from './list/index';

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
