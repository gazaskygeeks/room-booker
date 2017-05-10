import React from 'react';
import {PropTypes} from 'prop-types';


const MyReservation = ({deleteEvent,userReservations}) => {
  return (
      <div className="row">
        {
          (userReservations.length !== 0)
            ? (
              userReservations.map(function(event) {
                return(  <div className="col-md-4 col-sm-6 col-xs-12" key={event.id}>
                <div className="card">
                  <div className="card-block">
                    <h4 className="card-title">{event.summary}</h4>
                      <p className="card-text"> Room name: {event.room_name}</p>
                      <p className="card-text"> Description: {event.description}</p>
                    <a className="btn btn-danger" onClick={()=>{
                      deleteEvent(event.event_id,event.calendar_id,event.room_id);
                    }}>Cancel</a>
                  </div>
                </div>
              </div>
                );
              })
            )
            :(
              <div className="alert alert-info col-md-4" style={{marginTop: '20px', padding:'0'}}>
                <h4 style={{marginTop: '20px', marginLeft:'20px'}}><strong>Info!</strong> You don't have any bookings.</h4>
              </div>
            )
          }
      </div>
  );

};

MyReservation.propTypes = {
  userReservations: PropTypes.array,
  deleteEvent:PropTypes.func
};

export default MyReservation;
