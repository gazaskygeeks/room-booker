import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import UpdateModal from './UpdateModal.jsx';

class Reservations extends Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.showModal = this.showModal.bind(this);
    this.state = {
      openModal: false
    };
  }

  closeModal() {
    this.setState({openModal: false});
  }

  showModal() {
    this.setState({openModal: true});
  }

  render() {
    const {openModal} = this.state;
    const {event, deleteEvent, updateEvent, bookings} = this.props;
    return (
      <div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="card">
            <div className="card-block">
              <h4 className="card-title">{event.summary}</h4>
              <p className="card-text">
                Room name: {event.room_name}</p>
              <p className="card-text">
                Description: {event.description}</p>
              <p className="card-text">
                Room: {event.room_name}</p>
              <a className="btn btn-danger" onClick={() => {
                deleteEvent(event.event_id, event.calendar_id, event.room_id);
              }}>Cancel</a>
              <a className="btn btn-primary" style={{
                float: 'right'
              }} onClick={() => {
                this.showModal();
              }}>Edit</a>
            </div>
          </div>
        </div>
        <UpdateModal event={event} updateEvent={updateEvent} close={this.closeModal} bookings={bookings} open={openModal}/>

      </div>
    );
  }
}

Reservations.propTypes = {
  deleteEvent: PropTypes.func,
  event: PropTypes.object,
  showModal: PropTypes.func,
  updateEvent: PropTypes.func,
  bookings: PropTypes.array

};
export default Reservations;
