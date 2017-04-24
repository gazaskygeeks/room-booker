import React,{Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Room Booking</h1>
        <h3>Gaza Sky Geeks</h3>
        <ListGroup>
          <ListGroupItem href="#meetingRoom1">Meeting Room 1</ListGroupItem>
          <ListGroupItem href="#meetingRoom2">Meeting Room 2</ListGroupItem>
          <ListGroupItem href="#meetingRoom3">Meeting Room 3</ListGroupItem>
          <ListGroupItem href="#meetingRoom4">Meeting Room 4</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
export default Home;
