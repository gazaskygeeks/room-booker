import React, {Component} from 'react';

class MyReservation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="card col-sm-4">
          <div className="card-block">
            <h4 className="card-title">Meeting title</h4>
            <p className="card-text">Location: Meeting Room 1</p>
            <p className="card-text">Date: 22/2/2222</p>
            <p className="card-text">Time: From: 12:00 PM To 3:00 PM</p>
            <a href="#" className="btn btn-danger">Cancel</a>
          </div>
        </div>
        <div className="card col-sm-4">
          <div className="card-block">
            <h4 className="card-title">Meeting title</h4>
            <p className="card-text">Location: Meeting Room 1</p>
            <p className="card-text">Date: 22/2/2222</p>
            <p className="card-text">Time: From: 12:00 PM To 3:00 PM</p>
            <a href="#" className="btn btn-danger">Cancel</a>
          </div>
        </div>
        <div className="card col-sm-4">
          <div className="card-block">
            <h4 className="card-title">Meeting title</h4>
            <p className="card-text">Location: Meeting Room 1</p>
            <p className="card-text">Date: 22/2/2222</p>
            <p className="card-text">Time: From: 12:00 PM To 3:00 PM</p>
            <a href="#" className="btn btn-danger">Cancel</a>
          </div>
        </div>
        <div className="card col-sm-4">
          <div className="card-block">
            <h4 className="card-title">Meeting title</h4>
            <p className="card-text">Location: Meeting Room 1</p>
            <p className="card-text">Date: 22/2/2222</p>
            <p className="card-text">Time: From: 12:00 PM To 3:00 PM</p>
            <a href="#" className="btn btn-danger">Cancel</a>
          </div>
        </div>
      </div>
    );
  }
}

export default MyReservation;
