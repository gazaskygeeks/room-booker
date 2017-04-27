import React, {Component} from 'react';
class Rooms extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="card col-sm-4">
          <img className="card-img-top" src="/images/blank.jpg" alt="Card image cap" />
          <div className="card-block">
            <h4 className="card-title">Meeting Room 1</h4>
            <p className="card-text">Location: Gaza Sky Geeks</p>
            <p className="card-text">Capcity: 20 Person</p>
            <p className="card-text">Time Limit: 3 hours max</p>
            <a href="#" className="btn btn-primary" style={{width:'100%'}}>Reserve</a>
          </div>
        </div>
        <div className="card col-sm-4">
          <img className="card-img-top" src="/images/blank.jpg" alt="Card image cap" />
          <div className="card-block">
            <h4 className="card-title">Meeting Room 1</h4>
            <p className="card-text">Location: Gaza Sky Geeks</p>
            <p className="card-text">Capcity: 20 Person</p>
            <p className="card-text">Time Limit: 3 hours max</p>
            <a href="#" className="btn btn-primary" style={{width:'100%'}}>Reserve</a>
          </div>
        </div>
        <div className="card col-sm-4">
          <img className="card-img-top" src="/images/blank.jpg" alt="Card image cap" />
          <div className="card-block">
            <h4 className="card-title">Meeting Room 1</h4>
            <p className="card-text">Location: Gaza Sky Geeks</p>
            <p className="card-text">Capcity: 20 Person</p>
            <p className="card-text">Time Limit: 3 hours max</p>
              <a href="#" className="btn btn-primary" style={{width:'100%'}}>Reserve</a>
          </div>
        </div>
        <div className="card col-sm-4">
          <img className="card-img-top" src="/images/blank.jpg" alt="Card image cap" />
          <div className="card-block">
            <h4 className="card-title">Meeting Room 1</h4>
            <p className="card-text">Location: Gaza Sky Geeks</p>
            <p className="card-text">Capcity: 20 Person</p>
            <p className="card-text">Time Limit: 3 hours max</p>
            <a href="#" className="btn btn-primary" style={{width:'100%'}}>Reserve</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Rooms;
