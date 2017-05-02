import React, {Component} from 'react';
import Rooms from './Rooms.jsx';
import MyReservation from './MyReservation.jsx';


class Tab extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <ul className="nav nav-tabs">
            <li className="active">
              <a href="#home">Rooms</a>
            </li>
            <li>
              <a href="#menu1">My Reservation</a>
            </li>
          </ul>

          <div className="tab-content">
            <div id="home" className="tab-pane fade in active">
              <Rooms />
            </div>
            <div id="menu1" className="tab-pane fade">
              <MyReservation />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Tab;
