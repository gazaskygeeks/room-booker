import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import BigCalendar from 'react-big-calendar';
import {Modal,Button,Form,FormControl,FormGroup,Col,ControlLabel, Alert} from 'react-bootstrap';
import moment from 'moment';
import {checkEventAvailability} from '../utils/utils.js';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment
  ));

class WeekView extends Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.showModal = this.showModal.bind(this);
    this.onDescChange = this.onDescChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.eventModalDetails = this.eventModalDetails.bind(this);
    this.onStartTimeChange = this.onStartTimeChange.bind(this);
    this.onEndTimeChange = this.onEndTimeChange.bind(this);
    this.checkEventAvailability = this.checkEventAvailability.bind(this);
    this.formateEventsForCalendar = this.formateEventsForCalendar.bind(this);
    this.state={
      open:false,
      eventModal:false,
      eventTitle:'',
      eventDesc:'',
      eventOwner:'',
      title:'',
      desc:'',
      startTime:'',
      endTime: '',
      loop: null,
      alert:true,
      slotInfo:{}

    };
  }

  componentDidMount(){
    const {getEvent, room} = this.props;
    const loop = setInterval( () => {
      getEvent(room.room_id);
    }, 5000);
    this.setState({
      loop
    });
  }

  componentWillUnmount(){
    clearInterval(this.state.loop);
  }

  formateEventsForCalendar(){
    const {formateEvents, bookings} = this.props;
    return formateEvents(bookings);
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

  closeModal(){
    this.setState({
      open: false,
      eventModal:false
    });
  }

  showModal(){
    this.setState({
      open: true,
      eventModal:true
    });
  }

  alertInfo(){
    if (this.state.alert) {
      return(
        <Alert>
          <h4>Drag to book a date.</h4>
        </Alert>
      );
    }else {
      return(
      <Alert>
        <h4>You can't book on the past or over a date</h4>
      </Alert>
      );
    }
  }

  alertWarning(){
    if (!this.state.alert) {
      return(
        <Alert bsStyle="warning">
          <h4>You can't book over a date.</h4>
        </Alert>
      );
    }
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

  checkEventAvailability(){
    const {formateEventsForCalendar} = this;
    const bookings =  formateEventsForCalendar();
    const availability = checkEventAvailability(bookings,this.state.startTime.toString(),this.state.endTime.toString());
    this.setState({
      open:availability,
      alert:availability
    });
  }

  render() {
    const {bookings} = this.props;
    var event = {
      summary : this.state.title,
      description : this.state.desc,
      startDateTime : this.state.startTime,
      endDateTime :this.state.endTime
    };
    return (
      <div className="calendar-container">
        <div className="row">
          <img onClick={()=>this.props.onClick('HOME')} className="col-md-1" src="images/back5.png" style={{cursor: 'pointer',width: '80px',height: '50px'}} />
          <h1 className="col-md-11">
            {this.props.room.room_name}
          </h1>
        </div>
        {
          (this.state.alert)
            ?(
              this.alertInfo()
            )
            :(
                this.alertWarning()
            )
        }
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
        <Modal show={this.state.open} onHide={this.closeModal} aria-labelledby="ModalHeader">
          <Modal.Header closeButton>
            <Modal.Title id='ModalHeader'>Create Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
            <Form horizontal>
              <FormGroup>
                <Col sm={2}>
                  Event Title
                </Col>
                <Col sm={10}>
                  <FormControl type="text" value={this.state.title} onChange={this.onTitleChange} placeholder="Event Title" required/>
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                <Col sm={2}>
                  Description
                </Col>
                <Col sm={10}>
                  <FormControl type="text" value={this.state.desc} onChange={this.onDescChange} placeholder="description" required/>
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                <Col sm={2}>
                  Start Time
                </Col>
                <Col sm={10}>
                  <FormControl type="text" onChange={this.onStartTimeChange} value={this.state.startTime}/>
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                <Col sm={2}>
                  End Time
                </Col>
                <Col sm={10}>
                  <FormControl type="text" onChange={this.onEndTimeChange} value={this.state.endTime}/>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button onClick={(slotInfo)=>{
                    this.checkEventAvailability(slotInfo);
                    this.props.createEvent(event,this.props.room.room_id);
                    this.closeModal();
                  }}>
                    Submit
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
          </Modal.Body>
        </Modal>
        <BigCalendar
          selectable="ignoreEvents"
          popup
          titleAccessor='email'
          timeslots={4}
          step={15}
          events={this.formateEventsForCalendar()}
          views={['week', 'day']}
          defaultView='week'
          scrollToTime={new Date(2016)}
          defaultDate={new Date()}
          min={new Date(0,0,0,8,0,0,0)}
          max={new Date(0,0,0,19,0,0,0)}
          onSelectEvent={(event)=>{this.eventModalDetails(bookings,event);}}
          onSelectSlot={(slotInfo)=>{
            console.log(slotInfo);
            this.setState({
              startTime:slotInfo.start,
              endTime:slotInfo.end
            });
            this.checkEventAvailability();
          }
    }
          />
      </div>
    );
  }
}


WeekView.propTypes = {
  userInfo: PropTypes.object,
  createEvent: PropTypes.func,
  room:PropTypes.object,
  bookings:PropTypes.array,
  onClick: PropTypes.func,
  getEvent: PropTypes.func,
  formateEvents: PropTypes.func
};

export default WeekView;
