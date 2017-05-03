import {connect} from 'react-redux';
import Lobby from '../Lobby.jsx';
import {ChangeCurrentView,getDayEvents}from '../../actions.js';

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (currentView) =>{dispatch( ChangeCurrentView(currentView) );},
    getEvent: ()=>{dispatch(getDayEvents());}
  };
};

const ChangeView= connect(null,mapDispatchToProps)(Lobby);

export default ChangeView;
