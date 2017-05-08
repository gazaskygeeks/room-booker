import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import BigCalendar from 'react-big-calendar';
import {Modal,Button,Form,FormControl,FormGroup,Col} from 'react-bootstrap';
import moment from 'moment';
import events from '../events.js';
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
      endTime:'',
      email: 'props.userInfo.email'
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
      endDateTime :this.state.endTime,
      email: this.props.userInfo.email
    };
    return (
      <div className="calendar-container">
        <h1>
          Room 1
        </h1>
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
                  <FormControl type="text" value={this.state.title} onChange={this.onTitleChange} placeholder="Event Title"/>
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                <Col sm={2}>
                  Discription
                </Col>
                <Col sm={10}>
                  <FormControl type="text" value={this.state.desc} onChange={this.onDescChange} placeholder="discription"/>
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
                    this.closeModal;
                    this.props.createEvent(event);
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
          events={events}
          views={['week', 'day']}
          defaultView='week'
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date()}
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={(slotInfo) => {
            this.setState({
              open:true,
              startTime:`${slotInfo.start.toLocaleString()}`,
              endTime: `${slotInfo.end.toLocaleString()}`
            });
          }
          }/>
      </div>
    );
  }
}


WeekView.propTypes = {
  userInfo: PropTypes.object,
  createEvent: PropTypes.func
};

export default WeekView;
