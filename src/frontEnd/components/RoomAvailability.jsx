import React from 'react';
import DayView from './DayView.jsx';
import {PropTypes} from 'prop-types';


const RoomAvailbility = ({room}) => {
  return(
    <div>
      <h1>Room 1</h1>
      <DayView room={room}/>
    </div>
  );
};
RoomAvailbility.propTypes = {
  room : PropTypes.string
};

export default RoomAvailbility;
