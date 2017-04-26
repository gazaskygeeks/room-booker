import {connect} from 'react-redux';
import Home from '../Home.jsx';
import {ChangeCurrentView}from '../../actions.js'



const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (currentView) =>{dispatch( ChangeCurrentView(currentView) )}
  }
}


const ChangeView= connect(null,mapDispatchToProps)(Home)


export default ChangeView
