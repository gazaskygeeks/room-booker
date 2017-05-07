import {createStore,combineReducers} from 'redux';
import {currentUserReducer,bookings,currentUserReservations,currentView,rooms} from './reducers.js';


const allReducers = combineReducers(
  {
    userInfo: currentUserReducer,
    bookings:bookings,
    userReservations:currentUserReservations,
    currentView:currentView,
    rooms:rooms
  }
);

const store = createStore(allReducers);

export default store;
