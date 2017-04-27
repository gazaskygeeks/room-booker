import React from 'react';
import {PropTypes} from 'prop-types';
import GoogleLogin from './GoogleLogin.jsx';

const Home = (props) => (
  <div>
    <h1>Room Booking</h1>
    <h3>Gaza Sky Geeks</h3>
    <div className="row justify-content-md-center">
      <ul className="list-group col-md-6">
        <li className="list-group-item" href="#meetingRoom1" onClick={() => {
          props.onClick('ROOM_1');
        }}>Meeting Room 1</li>
        <li className="list-group-item" href="#meetingRoom2">Meeting Room 2</li>
        <li className="list-group-item" href="#meetingRoom3">Meeting Room 3</li>
        <li className="list-group-item" href="#meetingRoom4">Meeting Room 4</li>
      </ul>
    </div>
    <div className="row justify-content-md-center">
      <GoogleLogin/>
    </div>
  </div>
);

Home.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Home;
