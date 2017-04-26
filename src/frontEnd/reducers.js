const currentUserReducer = (state={}, action) => {
  switch (action.type) {
  case 'AUTHORIZED_USER':
    return action.payload;
  case 'UNAUTHORIZED_USER':
    return null;
  default:
    return state;
  }
};


const booking = (state = [] , action)=> {
  switch (action.type) {
  case 'FETCH_DAY_BOOKING':
    return action.payload;
  case 'FETCH_WEEK_BOOKING':
    return action.payload;
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

const currentView = (state='HOME',action)=>{
  switch(action.type){
  case 'CHANGE_CURRENT_VIEW':
    return action.payload;
  default:return state;
  }
};

export {currentUserReducer,booking,currentUserReservations,currentView};
