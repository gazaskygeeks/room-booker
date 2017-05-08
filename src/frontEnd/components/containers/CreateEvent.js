import {connect} from 'react-redux';
import WeekView from '../WeekView.jsx';
import {createEvent} from '../../actions.js';

const mapStateToProps = (state) => {
  return ({
    userInfo:state.userInfo,
    room:state.currentRoom
  });
};

const mapDispatchToProps = () => {
  return {
    createEvent: (event,id) => {
      createEvent(event,id);
    }
  };
};

const weekView = connect(mapStateToProps, mapDispatchToProps)(WeekView);

export default weekView;
