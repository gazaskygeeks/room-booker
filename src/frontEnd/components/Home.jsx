import React from 'react';
import {PropTypes} from 'prop-types';
import {Tabs, Tab} from 'react-bootstrap';
import Rooms from './Rooms.jsx';
import MyReservation from './MyReservation.jsx';

const HOME = ({onClick,rooms,selectRoom,userReservations}) => {
  return (
    <div>
      <Tabs defaultActiveKey={1} id='tabContainer'>
        <Tab eventKey={1} title="Rooms"><Rooms onClick={onClick} rooms={rooms} selectRoom={selectRoom}/></Tab>
        <Tab eventKey={2} title="My Reservation"><MyReservation userReservations={userReservations}/></Tab>
      </Tabs>
    </div>
  );
};

HOME.propTypes = {
  onClick: PropTypes.func.isRequired,
  rooms: PropTypes.array,
  selectRoom:PropTypes.func,
  userReservations: PropTypes.array
};

export default HOME;
