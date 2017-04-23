import {createStore,combineReducers} from 'redux';
import {currentUserReducer,bookings,currentUserReservations} from './reducers.js';


const allReducers = combineReducers({
  userInfo: currentUserReducer,
  booking:booking,
  userReservations:currentUserReservations
});
const store = createStore(allReducers);
export default store;
