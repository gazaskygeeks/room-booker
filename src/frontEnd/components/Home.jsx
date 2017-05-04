import React from 'react';
import {PropTypes} from 'prop-types';
import {Tabs, Tab} from 'react-bootstrap';
import Rooms from './Rooms.jsx';
import MyReservation from './MyReservation.jsx';

const HOME = ({onClick}) => {
  return (
    <div>
      <Tabs defaultActiveKey={1}>
        <Tab eventKey={1} title="Rooms"><Rooms onClick={onClick}/></Tab>
        <Tab eventKey={2} title="My Reservation"><MyReservation/></Tab>
      </Tabs>
    </div>
  );
};

HOME.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default HOME;
