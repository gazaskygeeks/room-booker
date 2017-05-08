import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';
import {PropTypes} from 'prop-types';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.getUserProfile = this.getUserProfile.bind(this);
  }
  getUserProfile() {
    if (this.props.userInfo.hasOwnProperty('first_name')) {
      return (
        <div>
          <Navbar.Text pullRight>
            <Navbar.Link onClick={() => {
              this.props.logout();
            }}>Logout</Navbar.Link>
          </Navbar.Text>
          <Navbar.Text pullRight>
            Welcome : {this.props.userInfo.first_name + ' ' + this.props.userInfo.last_name}
          </Navbar.Text>
        </div>
      );
    }

  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Navbar.Link onClick={()=>this.props.onClick('HOME')}>Gaza Sky Geeks
            </Navbar.Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text>
            Room Booking
          </Navbar.Text>
          {this.getUserProfile()}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

Nav.propTypes = {
  logout: PropTypes.func,
  userInfo:PropTypes.object,
  onClick:PropTypes.func
};

export default Nav;
