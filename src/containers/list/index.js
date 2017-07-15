import React,{ Component,PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actionType from '../../actions/list';
// import * as asyncAction from '../../actions/async';

// import Header from '../../components/header/index';
// import Message from '../../components/message/index';

class List extends Component{
  componentDidMount(){
    const { actions } = this.props;
    actions.getList({});
  }

  getList(articles){
    if(articles && articles.request && articles.request.list && articles.request.list.data){
      let list = articles.request.list.data.map(function(item,index){
        let link = "/detail/" +item.date;

        return (
          <li key={index} className="list-group-item">
            <Link to={link}>{item.date}</Link>
          </li>
        );
      });

      return list;
    }
    return "";
  }
  render(){
    const { list,actions } = this.props;
    
    // return (
    //   <div className="list">
    //     <Header login={ login } loginout={ actions.loginout } location={location} />
    //     <div className="">
    //       <h2>标题：</h2>
    //       <ul className="list-group">{ this.getList(articles) }</ul>
    //     </div>
    //   </div>
    // );

    return (
      <div className="list">
        <div className="">
          <h2>标题：</h2>
          <ul className="list-group">{ this.getList(list) }</ul>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state,ownProps) => { //将store中特定的值绑定到子组件上
  return {
    list : state.list
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({
      getList:actionType.getList
    },dispatch)
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(List);
