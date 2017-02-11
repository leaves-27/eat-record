import React,{ Component} from 'react';

export default class Message extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const { msg } = this.props;
    return (
      <div className="alert alert-danger">
        <span className="glyphicon glyphicon-remove"></span> {msg}
      </div>
    )
  }
}
