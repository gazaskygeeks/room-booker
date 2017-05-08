import {connect} from 'react-redux';
import Navbar from '../Navbar.jsx';
import {logout} from '../../actions.js';


const mapStateToProps = (state) => {
  return ({
    userInfo:state.userInfo
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
