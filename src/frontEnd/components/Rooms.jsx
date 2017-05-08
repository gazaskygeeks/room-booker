import React from 'react';
import {PropTypes} from 'prop-types';

const Rooms = ({onClick, rooms}) => {
  console.log(rooms);
    return (
        <div className="row">
            {rooms.map(function(room) {
                return (
                    <div className='col-md-4 col-sm-6 col-xs-6' key={room.id}>
                        <div className="card">
                            <img className="card-img-top img-responsive" src={room.room_image} alt="Card image cap"/>
                            <div className="card-block">
                                <h4 className="card-title">Name : {room.room_name}</h4>
                                <p className="card-text">Capacity : {room.room_capacity}</p>
                                <p className="card-text"> Location : {room.location}</p>
                                <p className="card-text">Time Limit : 3 Hours</p>
                                <a href="#" onClick={() => {
                                    onClick('MONTH_VIEW');
                                }} className="btn btn-primary">Reserve</a>
                            </div>
                        </div>
                    </div>
                )
            })
}
        </div>
    );
};

Rooms.propTypes = {
    onClick: PropTypes.func,
    rooms: PropTypes.array
};
export default Rooms;
