import {createStore,combineReducers} from 'redux';
import {currentUserReducer,booking,currentUserReservations} from './reducers.js';


const allReducers = combineReducers({
  userInfo: currentUserReducer,
  booking:booking,
  userReservations:currentUserReservations
});
const store = createStore(allReducers);
export default store;
