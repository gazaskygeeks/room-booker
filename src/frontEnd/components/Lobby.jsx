import React from 'react';
import {PropTypes} from 'prop-types';
import GoogleLogin from './GoogleLogin.jsx';

const Lobby = (props) => (
  <div>
    <div className="row">
      <h1 className="text-center">Room Booking</h1>
      <div className="list-group col-md-6 col-md-offset-3">
        <button type="button" onClick={() => {
          props.onClick('ROOM_1_AVAILABILITY');
          props.getEvent();
        }} className="list-group-item">Meeting Room 1</button>
        <button type="button" onClick={() => {
          props.onClick('ROOM_2_AVAILABILITY');
        }} className="list-group-item">Meeting Room 2</button>
        <button type="button" onClick={() => {
          props.onClick('ROOM_3_AVAILABILITY');
        }} className="list-group-item">Meeting Room 3</button>
        <button type="button" onClick={() => {
          props.onClick('ROOM_4_AVAILABILITY');
        }} className="list-group-item">Meeting Room 4</button>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4 col-md-offset-4">
        <GoogleLogin/>
      </div>
    </div>
  </div>
);

Lobby.propTypes = {
  onClick: PropTypes.func.isRequired,
  getEvent: PropTypes.func.isRequired
};

export default Lobby;
