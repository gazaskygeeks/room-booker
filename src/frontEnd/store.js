import {createStore,combineReducers} from 'redux';
import {currentUserReducer,bookings,currentUserReservations,currentView} from './reducers.js';


const allReducers = combineReducers(
  {
    userInfo: currentUserReducer,
    bookings:bookings,
    userReservations:currentUserReservations,
    currentView:currentView
  }
);


const store = createStore(allReducers);

export default store;
