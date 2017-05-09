import React from 'react';
import {PropTypes} from 'prop-types';
import {Tabs, Tab} from 'react-bootstrap';
import Rooms from './Rooms.jsx';
import MyReservation from './MyReservation.jsx';

const HOME = ({onClick,rooms,userEmail,selectRoom,userReservations,getUserBookings,getEvent}) => {
  return (
    <div>
      <Tabs defaultActiveKey={1} id='tabContainer'>
        <Tab eventKey={1} title="Rooms"><Rooms onClick={onClick} rooms={rooms} selectRoom={selectRoom}getEvent={getEvent}/></Tab>
        <Tab eventKey={2} onClick={()=>{getUserBookings(userEmail);}} title="My Reservation"><MyReservation userReservations={userReservations}/></Tab>
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
  userEmail: PropTypes.string,
  getEvent:PropTypes.func
};

export default HOME;
