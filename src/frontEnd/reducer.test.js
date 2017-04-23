import {currentUserReducer,booking,currentUserReservations} from './reducers.js';

const GoogleData = [
  {
    email: 'shahenaz@mercycorps.com'
  }
];

test('AUTHORIZED_USER should authorize new user if he has @gazaskygeeks or @mercycorps domain  ',()=>{
  const expectedAction = {
    type: 'AUTHORIZED_USER',
    payload: GoogleData
  };
  expect(currentUserReducer([], expectedAction)).toEqual(GoogleData);
});

test('UNAUTHORIZED_USER should not authorize new user if he has not @gazaskygeeks or @mercycorps domain  ',()=>{
  const expectedAction = {
    type: 'UNAUTHORIZED_USER',
    payload: GoogleData
  };
  expect(currentUserReducer([], expectedAction)).toEqual(null);
});

test('booking should book by day ',()=>{
  const dayBooking = [
    {
      summary: 'meeting room 1',
      location: 'GSG',
      start_time:'12:00 pm',
      end_time: '5:00 pm'

    }
  ];
  const expected = {
    type: 'FETCH_DAY_BOOKING',
    payload: dayBooking
  };
  expect(booking([], expected)).toEqual(dayBooking);
});

test('booking should book by week ',()=>{
  const weekBooking = [
    {
      summary: 'meeting room 1',
      location: 'GSG',
      start_date:'10-10-2017',
      end_date: '13-10-2017',
      start_time:'12:00 pm',
      end_time: '5:00 pm'

    }
  ];
  const expectedAction = {
    type: 'FETCH_WEEK_BOOKING',
    payload: weekBooking
  };
  expect(booking([], expectedAction)).toEqual(weekBooking);
});

const userReservations = {
  summary : 'meeting room 1',
  date: '10-10-2017',
  start_time:'12:00 pm',
  end_time: '5:00 pm'
};

test('FETCH_USER_RESERVATIONS_SUCCESS should fetch reservation for user ',()=>{

  const expectedAction = {
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
