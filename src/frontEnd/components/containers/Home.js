import {connect} from 'react-redux';
import Home from '../Home.jsx';
import {ChangeCurrentView}from '../../actions.js';

const mapStateToProps = (state)=>{
  return({
    rooms: state.rooms
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (currentView) =>{dispatch( ChangeCurrentView(currentView));}
  };
};

const HomeView= connect(mapStateToProps,mapDispatchToProps)(Home);

export default HomeView;
