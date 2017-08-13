import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import BigCalendar from 'react-big-calendar';
import {Modal,Form,FormGroup,Col,ControlLabel} from 'react-bootstrap';
import moment from 'moment';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
class DayView extends Component {
  constructor(props){
    super(props);
    this.formateEventsForCalendar = this.formateEventsForCalendar.bind(this);
    this.eventModalDetails = this.eventModalDetails.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state={
      eventModal:false,
      eventTitle:'',
      eventDesc:'',
      eventOwner:'',
      startTime:'',
      endTime: ''
    };
  }

  closeModal(){
    this.setState({
      eventModal:false
    });
  }

  formateEventsForCalendar(){
    const {formateEvents, bookings} = this.props;
    return formateEvents(bookings);
  }

  eventModalDetails(details,event){
    const thisEvent = details.find((ev)=>{
      return ev.id === event.id;
    });
    this.setState({
      eventModal:true,
      eventTitle:event.title,
      startTime:event.start.getHours()+':'+event.start.getMinutes()+' - '+event.start.getDate()+'/'+event.start.getMonth()+'/'+event.start.getYear(),
      endTime:event.end.getHours()+':'+event.end.getMinutes()+' - '+event.end.getDate()+'/'+event.end.getMonth()+'/'+event.end.getYear(),
      eventOwner:thisEvent.attendees[0].displayName,
      eventDesc:thisEvent.attendees[0].email,
    });
  }

  render() {
    const {isLoggedIn, room, bookings} = this.props;
    return (
      <div>
        <Modal show={this.state.eventModal} onHide={this.closeModal} aria-labelledby="ModalHeader">
          <Modal.Header closeButton>
            <Modal.Title id='ModalHeader'>Event: {this.state.eventTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form horizontal>
              <FormGroup>
                <Col sm={2}>
                  <ControlLabel>Title:</ControlLabel>
                </Col>
                <Col sm={10}>
                  <ControlLabel>{this.state.eventTitle}</ControlLabel>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm={2}>
                    <ControlLabel>Name:</ControlLabel>
                </Col>
                <Col sm={10}>
                  <ControlLabel>{this.state.eventOwner}</ControlLabel>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm={2}>
                    <ControlLabel>Email:</ControlLabel>
                </Col>
                <Col sm={10}>
                  <ControlLabel>{this.state.eventDesc}</ControlLabel>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm={2}>
                    <ControlLabel>Start time:</ControlLabel>
                </Col>
                <Col sm={10}>
                  <ControlLabel>{this.state.startTime}</ControlLabel>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm={2}>
                    <ControlLabel>End time:</ControlLabel>
                </Col>
                <Col sm={10}>
                  <ControlLabel>{this.state.endTime}</ControlLabel>
                </Col>
              </FormGroup>
            </Form>
          </Modal.Body>
        </Modal>
      <div className="calendar-container">
        <div className="row">
          <img onClick={() => isLoggedIn()} className="col-md-1" src="images/back5.png" style={{
            cursor: 'pointer',
            width: '80px',
            height: '50px'
          }}/>
          <h1 className="col-md-11">
            {room.room_name}
          </h1>
        </div>
        <BigCalendar
          events={this.formateEventsForCalendar()}
          views={['week', 'day']}
          defaultView='day'
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date()}
          min={new Date(0, 0, 0, 8, 0, 0, 0)}
          max={new Date(0, 0, 0, 21, 0, 0, 0)}
          onSelectEvent={(event)=>{this.eventModalDetails(bookings,event);}}
          />
      </div>
    </div>
    );
  }
}

DayView.propTypes = {
  bookings: PropTypes.array,
  room: PropTypes.object,
  isLoggedIn: PropTypes.func,
  formateEvents: PropTypes.func
};

export default DayView;
