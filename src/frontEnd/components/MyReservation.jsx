import React, {Component} from 'react';
import {PropTypes} from 'prop-types';


class MyReservation extends Component {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(){
  }

  render() {
    return (
      <div className="row">
        {this.props.userReservations.map(function(event) {
          return(  <div className="col-md-4 col-sm-6 col-xs-12" key={event.id}>
          <div className="card">
            <div className="card-block">
              <h3 className="card-title">{event.summary}</h3>
              <a href="#" className="btn btn-danger">Cancel</a>
            </div>
          </div>
        </div>
          );
        })
      }
      </div>
    );
  }
}
MyReservation.propTypes = {
  userReservations: PropTypes.array
};

export default MyReservation;
