import React from 'react';
import {PropTypes} from 'prop-types';
import {Alert} from 'react-bootstrap';
import GoogleLogin from './GoogleLogin.jsx';

const Lobby = ({onClick, getEvent, logIn, rooms,selectRoom, userInfo}) => {
  return (
    <div>
      <div className="row">

        <h1 className="text-center">Room Booking</h1>
        {
          (userInfo.hasOwnProperty('Error'))
          ? (
            <div className="col-md-6 col-md-offset-3">
              <Alert bsStyle="warning">
                <h4><strong>Sorry!</strong> {userInfo.Error}</h4>
              </Alert>
            </div>
          )
          : (
            <div>
            </div>

          )
        }
        <div className="list-group col-md-6 col-md-offset-3">

          {rooms.map(function(room) {
            return (
              <button type="button" onClick={() => {
                onClick('ROOM_AVAILABILITY');
                getEvent(room.id);
                selectRoom(room.id,room.room_name);

              }} className="list-group-item" key={room.id}>{room.room_name}</button>
            );
          })}
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <GoogleLogin onClick={onClick} login={logIn}/>
        </div>
      </div>
    </div>
  );
};

Lobby.propTypes = {
  onClick: PropTypes.func.isRequired,
  getEvent: PropTypes.func.isRequired,
  logIn: PropTypes.func.isRequired,
  userInfo: PropTypes.object,
  rooms: PropTypes.array,
  selectRoom: PropTypes.func.isRequired,

};

export default Lobby;
