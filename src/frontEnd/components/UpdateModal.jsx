import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {
  Modal,
  Button,
  Form,
  FormControl,
  FormGroup,
  Col,
  Alert
} from 'react-bootstrap';
import {checkEventAvailability} from '../utils/utils.js';

class UpdateModal extends Component {
  constructor(props) {
    super(props);
    const {event} = props;
    this.onDescChange = this.onDescChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onStartTimeChange = this.onStartTimeChange.bind(this);
    this.onEndTimeChange = this.onEndTimeChange.bind(this);
    this.checkEventAvailability = this.checkEventAvailability.bind(this);
    this.alertInfo = this.alertInfo.bind(this);
    this.state = {
      title: event.summary,
      desc: event.description,
      startTime: event.start_date,
      endTime: event.end_date,
      alert: 'none'

    };
  }

  alertInfo() {
    const {alert} = this.state;
    if (alert === 'success') {
      return (
        <Alert>
          <h4>Updated successfully !</h4>
        </Alert>
      );
    } else if (alert === 'failure') {
      return (
        <Alert bsStyle="warning">
          <h4>This timeslot is already reserved !</h4>
        </Alert>
      );
    } else { < div > </div>;
    }
  }

  checkEventAvailability() {
    const availability = checkEventAvailability(this.props.bookings, this.state.startTime.toString(), this.state.endTime.toString());
    if (availability) {
      this.setState({alert: 'success'});
    } else {
      this.setState({alert: 'failure'});
    }

  }

  onTitleChange(ev) {
    this.setState({title: ev.target.value});
  }

  onDescChange(ev) {
    this.setState({desc: ev.target.value});

  }
  onStartTimeChange(ev) {
    this.setState({startTime: ev.target.value});
  }

  onEndTimeChange(ev) {
    this.setState({endTime: ev.target.value});
  }

  render() {
    var newEvent = {
      summary: this.state.title,
      description: this.state.desc,
      startDateTime: this.state.startTime,
      endDateTime: this.state.endTime
    };
    const {open, close, event, updateEvent} = this.props;
    const {checkEventAvailability, alertInfo} = this;
    return (
      <Modal show={open} onHide={close} aria-labelledby="ModalHeader">
        <Modal.Header closeButton>
          <Modal.Title id='ModalHeader'>Edit Event: {this.state.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {alertInfo()}
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
                  <FormControl type="text" value={this.state.startTime} onChange={this.onStartTimeChange} placeholder="description" required/>
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                <Col sm={2}>
                  End Time
                </Col>
                <Col sm={10}>
                  <FormControl type="text" value={this.state.endTime} onChange={this.onEndTimeChange} placeholder="description" required/>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button onClick={() => {
                    checkEventAvailability();
                    setTimeout(()=>{
                      if (this.state.alert === 'success') {
                        updateEvent(event.room_id, {
                          id: event.event_id,
                          newEvent: newEvent
                        });
                        close();
                      }
                    },750);
                  }}>
                    Save
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

UpdateModal.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func,
  title: PropTypes.string,
  desc: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string
};

export default UpdateModal;
