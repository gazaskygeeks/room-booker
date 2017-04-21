import {createStore,combineReducers} from 'redux';
import {currentUserReducer,weekBookings,currentUserReservations} from './reducers.js';


const allReducers = combineReducers({
  userInfo: currentUserReducer,
  weekBookings: weekBookings,
  userReservations:currentUserReservations
});
const store = createStore(allReducers);
export default store;
