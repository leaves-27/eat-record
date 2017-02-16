import React,{ Component,PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actionType from '../../actions/index';
import Message from '../../components/message/index';

class List extends Component{
  componentDidMount(){
    const { actions } = this.props;
    // actions.getList("articles");
  }

  render(){
    const { articles } = this.props;

    if(!articles || !articles.data || articles.data.code!=0){
      return (
        <Message msg="数据获取失败，请稍后刷新页面重新获取数据" />
      ) 
    }

    let list = "";
    if (articles.data.data.length > 0) {
      list = articles.data.data.map(function(item,index){
        let link = "/web/detail/" +index;

        return (
          <li key={index} className="list-group-item">
            <Link to={link}>{item.date}</Link>
          </li>
        );
      });
    }else{
      list = (
        <li>
          <Message msg="没有列表信息。" />
        </li>
      );
    }

    return (
      <div>
        <h2>标题：</h2>
        <ul className="list-group">{ list }</ul>
      </div>
    )
    
  }
};

const mapStateToProps = (state,ownProps) => { //将store中特定的值绑定到子组件上
  return {
    articles:state.articles
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
