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
      openModal:false,
      eventTitle: '',
      eventDesc: '',
      start: '',
      end: ''
    };
  }

  closeModal(){
    this.setState({
      openModal: false
    });
  }

  showModal(eventId){
    const {userReservations} = this.props;
    const event = userReservations.find((event)=>{
      return event.id === eventId;
    });
    this.setState({
      openModal: true,
      eventTitle: event.summary,
      eventDesc: event.description,
      start: event.start_date,
      end: event.end_date
    });
  }

  render(){
    const {showModal, closeModal} = this;
    const {openModal, eventTitle, eventDesc, start, end} = this.state;
    const {userReservations, deleteEvent} = this.props;
    return (
        <div className="row">
          {
            (userReservations.length !== 0)
              ? (
                userReservations.map(function(event) {
                  return(
                    <div key={event.id}>
                      <Reservations event={event} deleteEvent={deleteEvent} showModal={showModal}/>
                      <UpdateModal open={openModal} close={closeModal} title={eventTitle} desc={eventDesc} start={start} end={end}/>
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
  deleteEvent:PropTypes.func
};

export default MyReservation;
