import {connect} from 'react-redux';
import Home from '../Home.jsx';
import {ChangeCurrentView,selectRoom}from '../../actions.js';

const mapStateToProps = (state)=>{
  return({
    rooms: state.rooms,
    userReservations:state.userReservations
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (currentView) =>{dispatch( ChangeCurrentView(currentView));},
    selectRoom: (id,room)=>{dispatch(selectRoom(id,room));}

  };
};

const HomeView= connect(mapStateToProps,mapDispatchToProps)(Home);

export default HomeView;
