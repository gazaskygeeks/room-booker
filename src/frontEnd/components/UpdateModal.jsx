import React,{Component} from 'react';
import {PropTypes} from 'prop-types';
import {Modal, Button, Form, FormControl, FormGroup, Col} from 'react-bootstrap';



class UpdateModal extends Component {
  constructor(props){
    super(props);

    this.onDescChange = this.onDescChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.eventModalDetails = this.eventModalDetails.bind(this);
    this.onStartTimeChange = this.onStartTimeChange.bind(this);
    this.onEndTimeChange = this.onEndTimeChange.bind(this);
    this.checkEventAvailability = this.checkEventAvailability.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.showModal = this.showModal.bind(this);
    this.state = {
      title : '',
      desc: '',
      startTime: '',
      endTime:'',
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
      var newEvent = {
        summary : this.state.title,
        description : this.state.desc,
        startDateTime : this.state.startTime,
        endDateTime :this.state.endTime
      };
      const {open, close,event} = this.props;
  return (
    <Modal show={open} onHide={close} aria-labelledby="ModalHeader">
      <Modal.Header closeButton>
        <Modal.Title id='ModalHeader'>Edit Event: {this.state.title}</Modal.Title>
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
                <Button onClick={()=>{
                  this.checkEventAvailability();
                    updateEvent(event.room_id,{
                      id : event.event_id,
                      event : newEvent
                    });
                    //close the modal



                      this.setState({
                        alert:'failure'
                      });
                    //close the modal
                  }
                  }>
                  Save
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
};
};


UpdateModal.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func,
  title: PropTypes.string,
  desc: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string
};

export default UpdateModal;
