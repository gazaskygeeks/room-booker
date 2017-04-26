import {connect} from 'react-redux';
import App from '../App.jsx';

const mapStateToProps = (state)=>{
  return{
    currentView: state.currentView
  };
};

const AppView= connect(mapStateToProps,null)(App);

export default AppView;
