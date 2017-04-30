import React, {Component} from 'react';
class Rooms extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <div className='col-md-4'>
          <div className="card">
            <img className="card-img-top img-responsive" src="/images/blank.jpg" alt="Card image cap"/>
            <div className="card-block">
              <h4 className="card-title">Meeting Room</h4>
              <p className="card-text">Some text</p>
              <p className="card-text">Some text</p>
              <p className="card-text">Some text</p>
              <a href="#" className="btn btn-primary">Reserve</a>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className="card">
            <img className="card-img-top img-responsive" src="/images/blank.jpg" alt="Card image cap"/>
            <div className="card-block">
              <h4 className="card-title">Meeting Room</h4>
              <p className="card-text">Some text</p>
              <p className="card-text">Some text</p>
              <p className="card-text">Some text</p>
              <a href="#" className="btn btn-primary">Reserve</a>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className="card">
            <img className="card-img-top img-responsive" src="/images/blank.jpg" alt="Card image cap"/>
            <div className="card-block">
              <h4 className="card-title">Meeting Room</h4>
              <p className="card-text">Some text</p>
              <p className="card-text">Some text</p>
              <p className="card-text">Some text</p>
              <a href="#" className="btn btn-primary">Reserve</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Rooms;
