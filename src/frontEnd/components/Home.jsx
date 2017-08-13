import React from 'react';
import {PropTypes} from 'prop-types';
import {Tabs, Tab} from 'react-bootstrap';
import Rooms from './Rooms.jsx';
import MyReservation from './MyReservation.jsx';

const HOME = ({onClick,rooms,selectRoom,userReservations,getUserBookings,getEvent,deleteEvent,clearEvents,updateEvent,bookings}) => {

  return (
    <div>
      <Tabs defaultActiveKey={1} onSelect={()=>{getUserBookings();}}id='tabContainer'>
        <Tab eventKey={1} title="Rooms"><Rooms onClick={onClick} rooms={rooms} selectRoom={selectRoom}getEvent={getEvent} clearEvents={clearEvents} /></Tab>
        <Tab eventKey={2} title="My Bookings"><MyReservation bookings= {bookings} userReservations={userReservations} deleteEvent={deleteEvent} updateEvent={updateEvent} /></Tab>
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
  deleteEvent:PropTypes.func,
  clearEvents: PropTypes.func,
  updateEvent: PropTypes.func,
  bookings: PropTypes.array
};

export default HOME;
