const currentUserReducer = (state = {}, action) => {
    switch (action.type) {
    case 'AUTHORIZED_USER':
        return action.payload;
    case 'UNAUTHORIZED_USER':
        return null;
    default:
        return state;
    }
    console.log(state);
};

const weekBookings =(state = [] , action)=> {
    switch (action.type) {
    case 'FETCH_WEEK_BOOKINGS_SUCCESS':
        return action.payload;
    case 'FETCH_WEEK_BOOKINGS_FAILED':
        return null;
    default:return state;
    }
};
const currentUserReservations =(state = [] , action)=> {
    switch (action.type) {
    case 'FETCH_USER_RESERVATIONS_SUCCESS':
        return action.payload;
    case 'FETCH_USER_RESERVATIONS_FAILED':
        return null;
    default:return state;
    }
};

export {currentUserReducer,weekBookings,currentUserReservations};
