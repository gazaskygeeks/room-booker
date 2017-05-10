import React from 'react';
import {PropTypes} from 'prop-types';

const Rooms = ({onClick, rooms,selectRoom,getEvent}) => {
  return (
    <div className="row">
        {rooms.map(function(room) {
          return (
            <div className='col-md-4 col-sm-6 col-xs-12' key={room.id}>
                <div className="card">
                    <img className="card-img-top img-responsive" src={room.room_image} alt="Card image cap"/>
                    <div className="card-block">
                        <h4 className="card-title">Name: {room.room_name}</h4>
                        <p className="card-text">Capacity: {room.room_capacity}</p>
                        <p className="card-text"> Location: {room.location}</p>
                        <div className="btn-group btn-group-justified">
                        <a href="#" onClick={() => {
                          onClick('WEEK_VIEW');
                          getEvent(room.id);
                          selectRoom(room.id,room.room_name);
                        }} className="btn btn-primary">Reserve</a>
                        <a href="#" onClick={() => {
                          onClick('ROOM_AVAILABILITY');
                          getEvent(room.id);
                          selectRoom(room.id,room.room_name);
                        }} className="btn btn-success">View</a>
                        </div>
                    </div>
                </div>
            </div>
          );
        })
      }
    </div>
  );
};

Rooms.propTypes = {
  onClick: PropTypes.func,
  rooms: PropTypes.array,
  selectRoom: PropTypes.func,
  getEvent: PropTypes.func
};
export default Rooms;
