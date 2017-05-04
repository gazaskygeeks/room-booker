import React, {Component} from 'react';
import {Modal,Button,Form,FormControl,FormGroup,Col} from 'react-bootstrap';

class FormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      desc: ''
    };
  }

  render() {
    let closeModal = () => this.setState({open: false});

    let showModal = () => this.setState({open: true});
    return (
      <div>
        <button onClick={showModal} type='button'>Launch modal</button>

        <Modal show={this.state.open} onHide={closeModal} aria-labelledby="ModalHeader">
          <Modal.Header closeButton>
            <Modal.Title id='ModalHeader'>A Title Goes here</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
            <Form horizontal>
              <FormGroup>
                <Col sm={2}>
                  Event Title
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Event Title"/>
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                <Col sm={2}>
                  Discription
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="discription"/>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit">
                    Submit
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default FormModal;
