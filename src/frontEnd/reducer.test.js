
import {currentUserReducer,bookings,currentUserReservations} from './reducers.js';const GoogleData = [
 {
   email: 'shahenaz@mercycorps.com'
 }
];test('UPDATE_PROFILE should authorize new user if he has @gazaskygeeks or @mercycorps domain  ',()=>{
 const expectedAction = {
   type: 'UPDATE_PROFILE',
   payload: GoogleData
 };
 expect(currentUserReducer([], expectedAction)).toEqual(GoogleData);
});test('booking should book by day ',()=>{
 const dayBooking = [
   {
     summary: '800 Howard St., San Francisco, CA 94103',
     location: '800 Howard St., San Francisco, CA 94103',
     created:'2017-04-26T10:29:10.000Z'    }
 ];
 const expected = {
   type: 'FETCH_DAY_BOOKING',
   payload: dayBooking,
   date:'2017-04-26T10:29:10.000Z'
 };
 expect(bookings([], expected)).toEqual(dayBooking);
});test('booking should book by week ',()=>{
 const weekBooking = [
   {
     summary: 'meeting room 1',
     location: 'GSG',
     start_date:'10-10-2017',
     end_date: '13-10-2017',
     start_time:'12:00 pm',
     end_time: '5:00 pm'    }
 ];
 const expectedAction = {
   type: 'FETCH_WEEK_BOOKING',
   payload: weekBooking
 };
 expect(bookings([], expectedAction)).toEqual(weekBooking);
});const userReservations = {
 summary : 'meeting room 1',
 date: '10-10-2017',
 start_time:'12:00 pm',
 end_time: '5:00 pm'
};test('FETCH_USER_RESERVATIONS_SUCCESS should fetch reservation for user ',()=>{  const expectedAction = {
   type: 'FETCH_USER_RESERVATIONS_SUCCESS',
   payload: userReservations
 };
 expect(currentUserReservations([], expectedAction)).toEqual(userReservations);
});
test('FETCH_USER_RESERVATIONS_FAILED should not fetch reservation for user  ',()=>{
 const expectedAction = {
   type: 'FETCH_USER_RESERVATIONS_FAILED',
   payload: userReservations
 };
 expect(currentUserReservations([], expectedAction)).toEqual(null);
});
