import React, {Component} from 'react';
import {PropTypes} from 'prop-types';


class MyReservation extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(){
  }

  getUserReservations() {
    if (this.props.userReservations !== []) {
      const {deleteEvent} = this.props;
      return (
        this.props.userReservations.map(function(event) {
          return(  <div className="col-md-4 col-sm-6 col-xs-12" key={event.id}>
          <div className="card">
            <div className="card-block">
              <h3 className="card-title">{event.summary}</h3>
              <a className="btn btn-danger" onClick={deleteEvent(event.event_id,event.room_id)}>Cancel</a>
            </div>
          </div>
        </div>
          );
        })
      );
    }else {
      return(
        <div className="alert alert-info col-md-4" style={{marginTop: '20px', padding:'0'}}>
          <h4 style={{marginTop: '20px', marginLeft:'20px'}}><strong>Info!</strong> You don't have any bookings.</h4>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="row">
        {this.getUserReservations()}
      </div>
    );
  }
}

MyReservation.propTypes = {
  userReservations: PropTypes.array,
  deleteEvent:PropTypes.func
};

export default MyReservation;
