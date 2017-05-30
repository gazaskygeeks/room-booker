import React,{Component} from 'react';
import {PropTypes} from 'prop-types';
import Reservations from './Reservations.jsx';
import UpdateModal from './UpdateModal.jsx';

class MyReservation extends Component {
  constructor(props){
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.showModal = this.showModal.bind(this);
    this.state = {
      openModal:false
  }
};

  closeModal(){
    this.setState({
      openModal: false
    });
  }

  showModal(eventId){
    this.setState({
      openModal: true
    });
  }

  render(){
    const {showModal, closeModal} = this;
    const {openModal} = this.state;
    const {userReservations, deleteEvent,updateEvent, bookings} = this.props;

    return (
        <div className="row">
          {
            (userReservations.length !== 0)
              ? (
                userReservations.map(function(event) {


                  return(
                    <div key={event.id}>
                      <Reservations event={event} deleteEvent={deleteEvent} showModal={showModal}/>
                      <UpdateModal open={openModal} close={closeModal} bookings = {bookings} event={event} updateEvent={updateEvent}/>
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
  }
}

MyReservation.propTypes = {
  userReservations: PropTypes.array,
  deleteEvent:PropTypes.func,
  updateEvent:PropTypes.func
};

export default MyReservation;
