import {connect} from 'react-redux';
import Navbar from '../Navbar.jsx';
import {logout} from '../../actions.js';


const mapStateToProps = (state) => {
  return ({
    firstName: state.userInfo.first_name,
    lastName: state.userInfo.last_name,
  });

};

const mapDispatchToProps = () => {
  return {
    logout: () => {
      logout();
    }
  };
};

const NavView = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavView;
