import {connect} from 'react-redux';
import App from '../App.jsx';
import {ChangeCurrentView,isLoggedIn,getRooms}from '../../actions.js';

const mapStateToProps = (state)=>{
  return{
    currentView: state.currentView,
    userInfo: state.userInfo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (currentView) =>{dispatch( ChangeCurrentView(currentView));},
    isLoggedIn: () =>{ isLoggedIn();},
    getRooms:()=>{getRooms();}
  };
};

const AppView= connect(mapStateToProps,mapDispatchToProps)(App);

export default AppView;
