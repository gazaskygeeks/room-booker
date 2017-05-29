import React,{Component} from 'react';
import {PropTypes} from 'prop-types';
import {Modal} from 'react-bootstrap';

class MyReservation extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    };
  }
  render(){
    const {userReservations, deleteEvent} = this.props;
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
                        <p className="card-text"> Room: {event.room_name}</p>
                      <a className="btn btn-danger" onClick={()=>{
                        deleteEvent(event.event_id,event.calendar_id,event.room_id);
                      }}>Cancel</a>
                    <a className="btn btn-primary" style={{marginLeft:'3%'}} onClick={()=>{}}>Update</a>
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
            <Modal >
              <Modal.Header closeButton>
                <Modal.Title id='ModalHeader'>Edit event: {this.state.eventTitle}</Modal.Title>
              </Modal.Header>
            </Modal>
        </div>
    );
  }
}

MyReservation.propTypes = {
  userReservations: PropTypes.array,
  deleteEvent:PropTypes.func
};

export default MyReservation;
