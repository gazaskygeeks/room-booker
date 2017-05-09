import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import BigCalendar from 'react-big-calendar';
import {Modal,Button,Form,FormControl,FormGroup,Col} from 'react-bootstrap';
import moment from 'moment';

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
    this.state={
      open:false,
      title:'',
      desc:'',
      startTime:'',
      endTime:''
    };
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

  closeModal(){
    this.setState({
      open: false
    });
  }

  showModal(){
    this.setState({
      open: true
    });
  }

  render() {


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
                  Discription
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
                  <FormControl type="text" value={this.state.startTime} disabled/>
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                <Col sm={2}>
                  End Time
                </Col>
                <Col sm={10}>
                  <FormControl type="text" value={this.state.endTime} disabled/>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button onClick={()=>{
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
          selectable
          events={this.props.bookings}
          views={['week', 'day']}
          defaultView='week'
          scrollToTime={new Date(2016)}
          defaultDate={new Date()}
          min={new Date(0,0,0,8,0,0,0)}
          max={new Date(0,0,0,19,0,0,0)}
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={(slotInfo) => {
            this.setState({
              open:true,
              startTime:`${slotInfo.start.toString()}`,
              endTime: `${slotInfo.end.toString()}`
            });
          }

          }/>
      </div>
    );
  }
}


WeekView.propTypes = {
  userInfo: PropTypes.object,
  createEvent: PropTypes.func,
  room:PropTypes.object,
  bookings:PropTypes.array,
  onClick: PropTypes.func
};

export default WeekView;
