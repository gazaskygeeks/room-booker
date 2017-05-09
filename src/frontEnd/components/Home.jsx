import React from 'react';
import {PropTypes} from 'prop-types';
import {Tabs, Tab} from 'react-bootstrap';
import Rooms from './Rooms.jsx';
import MyReservation from './MyReservation.jsx';

const HOME = ({onClick,rooms,selectRoom,userReservations,getUserBookings,getEvent,deleteEvent}) => {


  return (
    <div>
      <Tabs defaultActiveKey={1} onSelect={()=>{getUserBookings();}}id='tabContainer'>
        <Tab eventKey={1} title="Rooms"><Rooms onClick={onClick} rooms={rooms} selectRoom={selectRoom}getEvent={getEvent} /></Tab>
        <Tab eventKey={2} title="My Bookings"><MyReservation userReservations={userReservations} deleteEvent={deleteEvent}/></Tab>
      </Tabs>
    </div>
  );
};

HOME.propTypes = {
  onClick: PropTypes.func.isRequired,
  rooms: PropTypes.array,
  selectRoom:PropTypes.func,
  userReservations: PropTypes.array,
  getUserBookings: PropTypes.func,
  getEvent:PropTypes.func,
  deleteEvent:PropTypes.func
};

export default HOME;
