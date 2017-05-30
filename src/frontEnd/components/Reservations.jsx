import React from 'react';
import {PropTypes} from 'prop-types';

const Reservations = ({event, deleteEvent, showModal})=>{
  return(
    <div className="col-md-4 col-sm-6 col-xs-12">
      <div className="card">
        <div className="card-block">
          <h4 className="card-title">{event.summary}</h4>
            <p className="card-text"> Room name: {event.room_name}</p>
            <p className="card-text"> Description: {event.description}</p>
            <p className="card-text"> Room: {event.room_name}</p>
          <a className="btn btn-danger" onClick={()=>{
            deleteEvent(event.event_id,event.calendar_id,event.room_id);
          }}>Cancel</a>
        <a className="btn btn-primary" style={{marginLeft:'3%'}} onClick={()=>{
          showModal(event.id);
        }}>Update</a>
        </div>
      </div>
    </div>
  );
};

Reservations.propTypes = {
  deleteEvent:PropTypes.func,
  event: PropTypes.object,
  showModal: PropTypes.func
};
export default Reservations;
