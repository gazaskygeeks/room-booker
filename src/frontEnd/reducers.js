const currentUserReducer = (state={}, action) => {
  switch (action.type) {
  case 'UPDATE_PROFILE':
    return action.payload;
  default:
    return state;
  }
};

const rooms = (state =[],action)=>{
  switch (action.type){
  case 'FETCH_ROOMS':
    return action.payload;
  default:
    return state;
  }
};

const bookings = (state = [] , action)=> {
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
  default:return state;
  }
};

const currentView = (state='SPINNER',action)=>{
  switch(action.type){
  case 'CHANGE_CURRENT_VIEW':
    return action.payload;
  default:
    return state;
  }
};

const currentRoom = (state='',action)=>{
  switch(action.type){
  case 'SELECTED_ROOM':
    return action.payload;
  default:
    return state;
  }
};

export {currentUserReducer,bookings,currentUserReservations,currentView,rooms,currentRoom};
