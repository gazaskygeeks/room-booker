import React from 'react';
import {PropTypes} from 'prop-types';
import Reservations from './Reservations.jsx';

const MyReservation = ({userReservations, deleteEvent,updateEvent, bookings})=>{
  return (
      <div className="row">
        {
          (userReservations.length !== 0)
            ? (
              userReservations.map(function(event) {
                return(
                  <div key={event.id}>
                    <Reservations event={event} deleteEvent={deleteEvent} updateEvent={updateEvent} bookings={bookings}/>
                  </div>
                );
              })
            )
            :(
              <div className="alert alert-info col-md-4" style={{marginTop: '20px', padding:'0'}}>
                <h4 style={{marginTop: '20px', marginLeft:'20px'}}>You don't have any bookings currently</h4>
              </div>
            )
          }
      </div>
  );
};


MyReservation.propTypes = {
  userReservations: PropTypes.array,
  deleteEvent:PropTypes.func,
  updateEvent:PropTypes.func,
  bookings: PropTypes.array
};

export default MyReservation;
