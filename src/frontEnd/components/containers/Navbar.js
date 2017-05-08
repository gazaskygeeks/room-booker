import {connect} from 'react-redux';
import Navbar from '../Navbar.jsx';
import {logout,ChangeCurrentView,isLoggedIn} from '../../actions.js';


const mapStateToProps = (state) => {
  return ({
    userInfo:state.userInfo
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {logout();},
    isLoggedIn: () =>{ isLoggedIn();},
    onClick: (currentView) =>{dispatch( ChangeCurrentView(currentView));}

  };
};

const NavView = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavView;
