import {connect} from 'react-redux';
import WeekView from '../WeekView.jsx';
import {createEvent} from '../../actions.js';

const mapStateToProps = (state) => {
  return ({
    userInfo:state.userInfo
  });
};

const mapDispatchToProps = () => {
  return {
    createEvent: (event) => {
      createEvent(event);
    }
  };
};

const weekView = connect(mapStateToProps, mapDispatchToProps)(WeekView);

export default weekView;
