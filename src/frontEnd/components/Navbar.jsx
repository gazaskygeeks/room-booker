import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';
import {PropTypes} from 'prop-types';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {

      value: 'none'
    };
  }

  componentWillReceiveProps(nextProps) {
  if(nextProps.firstName === undefined){
    }else{
      this.setState({
        value:'inline'
      });
    }
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
            Welcome : {this.props.firstName + ' ' + this.props.lastName}
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
