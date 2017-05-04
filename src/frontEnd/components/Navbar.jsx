import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';
import {PropTypes} from 'prop-types';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      value: 'none'
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      firstName:nextProps.firstName,
      lastName:nextProps.firstName,
      value:'inline'
    });
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Gaza Sky Geeks</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text>
            Room Booking
          </Navbar.Text>
          <Navbar.Text pullRight style={{
            display: this.state.value
          }}>
            <Navbar.Link onClick={() => {
              this.setState({value:'none'});
              this.props.logout();
            }}>Logout</Navbar.Link>
          </Navbar.Text>
          <Navbar.Text pullRight style={{
            display: this.state.value
          }}>
            Welcome : {this.state.firstName + ' ' + this.state.lastName}
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

Nav.propTypes = {
  logout: PropTypes.func,
  firstName: PropTypes.string,
  lastName: PropTypes.string
};

export default Nav;
