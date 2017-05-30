import React,{Component} from 'react';
import {PropTypes} from 'prop-types';
import {Modal} from 'react-bootstrap';

class MyReservation extends Component {
  constructor(props){
    super(props);
    this.onDescChange = this.onDescChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.eventModalDetails = this.eventModalDetails.bind(this);
    this.onStartTimeChange = this.onStartTimeChange.bind(this);
    this.onEndTimeChange = this.onEndTimeChange.bind(this);
    this.checkEventAvailability = this.checkEventAvailability.bind(this);
    this.state = {
      title : '',
      desc: '',
      startTime: '',
      endTime:'',
      open:false,
      alert:'none'

    };
  }

  alertWarning(){
    if (this.state.alert === 'failure') {
      return(
        <Alert bsStyle="warning">
          <h4>The time slot is already reserved !</h4>
        </Alert>
      );
    }
  }
  alertInfo(){
    if (this.state.alert === 'success') {
      return(
      <Alert>
        <h4>Your meeting has successfully updated !</h4>
      </Alert>
      );
    }
  }

  checkEventAvailability(){
      const availability = checkEventAvailability(this.props.bookings,this.state.startTime.toString(),this.state.endTime.toString());
      if(availability){
        this.setState({
          open:availability,
          alert:'success'
        });
      }


  }

  onTitleChange(ev){
    this.setState({
      title:ev.target.value
    });
  }

  onDescChange(ev){
    this.setState({
      desc:ev.target.value
    });

  }
  onStartTimeChange(ev){
    this.setState({
      startTime:ev.target.value
    });
  }

  onEndTimeChange(ev){
    this.setState({
      endTime:ev.target.value
    });
  }
  render(){
    const {userReservations, deleteEvent,updateEvent} = this.props;
    var newEvent = {
      summary : this.state.title,
      description : this.state.desc,
      startDateTime : this.state.startTime,
      endDateTime :this.state.endTime
    };
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
                          <p className="card-text"> Room: {event.room_name}</p>
                        deleteEvent(event.event_id,event.calendar_id,event.room_id);
                        this.checkEventAvailability();
                        if(this.open == false){
                          updateEvent(room_id,{
                            id : event.event_id,
                            event : newEvent
                          });
                          //close the modal
                        }
                        else{

                            this.setState({
                              alert:'failure'
                            });
                          //close the modal
                        }



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
  deleteEvent:PropTypes.func,
  updateEvent:PropTypes.func
};

export default MyReservation;
