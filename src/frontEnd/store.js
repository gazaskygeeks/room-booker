import {createStore,combineReducers} from 'redux';
import {currentUserReducer,booking,currentUserReservations,currentView} from './reducers.js';


const allReducers = combineReducers(
  {
    userInfo: currentUserReducer,
    booking:booking,
    userReservations:currentUserReservations,
    currentView:currentView
  }
);


const store = createStore(allReducers);

export default store;
