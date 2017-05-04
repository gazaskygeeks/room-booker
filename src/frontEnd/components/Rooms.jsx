import React from 'react';
import {PropTypes} from 'prop-types';

const Rooms = ({onClick}) => {
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
            <a href="#" onClick={()=>{onClick('MONTH_VIEW');}} className="btn btn-primary">Reserve</a>
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
};

Rooms.propTypes = {
  onClick: PropTypes.func
};
export default Rooms;
