import React, {Component} from 'react';

class MyReservation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-block">
              <h3 className="card-title">Special title treatment</h3>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-danger">Cancel</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-block">
              <h3 className="card-title">Special title treatment</h3>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-danger">Cancel</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyReservation;
