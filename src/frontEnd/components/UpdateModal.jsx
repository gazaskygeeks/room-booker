import React from 'react';
import {PropTypes} from 'prop-types';
import {Modal, Button, Form, FormControl, FormGroup, Col} from 'react-bootstrap';

const UpdateModal = ({open, close, title, desc, start, end}) => {
  return (
    <Modal show={open} onHide={close} aria-labelledby="ModalHeader">
      <Modal.Header closeButton>
        <Modal.Title id='ModalHeader'>Edit event: {title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <Form horizontal>
            <FormGroup>
              <Col sm={2}>
                Event Title
              </Col>
              <Col sm={10}>
                <FormControl type="text" value={title} placeholder="Event Title" required/>
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalPassword">
              <Col sm={2}>
                Description
              </Col>
              <Col sm={10}>
                <FormControl type="text" value={desc} placeholder="description" required/>
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalPassword">
              <Col sm={2}>
                Start Time
              </Col>
              <Col sm={10}>
                <FormControl type="text" value={start} placeholder="description" required/>
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalPassword">
              <Col sm={2}>
                End Time
              </Col>
              <Col sm={10}>
                <FormControl type="text" value={end} placeholder="description" required/>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button>
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


UpdateModal.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func,
  title: PropTypes.string,
  desc: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string
};

export default UpdateModal;
