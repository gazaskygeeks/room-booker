import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {PropTypes} from 'prop-types';
import GoogleLogin from './GoogleLogin.jsx';



const Home = (props) =>(
      <div>
        <h1>Room Booking</h1>
        <h3>Gaza Sky Geeks</h3>
        <ListGroup>
          <ListGroupItem href="#meetingRoom1" onClick={()=>{props.onClick('ROOM_AVAILABITLITY');}}>Meeting Room 1</ListGroupItem>
          <ListGroupItem href="#meetingRoom2">Meeting Room 2</ListGroupItem>
          <ListGroupItem href="#meetingRoom3">Meeting Room 3</ListGroupItem>
          <ListGroupItem href="#meetingRoom4">Meeting Room 4</ListGroupItem>
        </ListGroup>
        <GoogleLogin/>
      </div>
    );

Home.propTypes = {
  onClick : PropTypes.func.isRequired
};

export default Home;
