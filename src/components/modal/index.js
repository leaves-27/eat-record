import React,{ Component} from 'react';

export default class Message extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div id="myModal" className="modal fade" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">提示</h4>
            </div>
            <div className="modal-body">
              <p></p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
              <button type="button" className="btn btn-primary confirm-btn">确定</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
