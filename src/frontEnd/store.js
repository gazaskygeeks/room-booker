import {createStore,combineReducers} from 'redux';
import {currentUserReducer,bookings,currentUserReservations,currentView,rooms,currentRoom} from './reducers.js';


const allReducers = combineReducers(
  {
    userInfo: currentUserReducer,
    bookings:bookings,
    userReservations:currentUserReservations,
    currentView:currentView,
    rooms:rooms,
    currentRoom:currentRoom
  }
);

const store = createStore(allReducers);

export default store;
