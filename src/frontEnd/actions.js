import store from './store.js';
import {setToRightKeys} from './utils/utils.js';

const validEmail = (data) => {
  const info = setToRightKeys(data);
  (info.email.includes('mhmd') || info.email.includes('@mercycorps.com'))
        ? store.dispatch({type: 'AUTHORIZED_USER', payload: info})
        : store.dispatch({type: 'UNAUTHORIZED_USER', payload: null});
};
const insertUser = (data) => {
  fetch('/login', {
    method: 'POST',
    body: JSON.stringify(data),
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'content-type': 'application/json'
    }
  }).then(res => {
    if (res.status === 200) {
      isLoggedIn();
      res.json();
    }
  }).then((result) => {
    store.dispatch({type: 'AUTHORIZED_USER', payload: result});
  }).catch((err) => {
    store.dispatch({type: 'UNAUTHORIZED_USER', payload: err});
  });

};

const ChangeCurrentView = (currentView) => {
  return {type: 'CHANGE_CURRENT_VIEW', payload: currentView};
};

const getDayEvents = (id) => {

  fetch('/events/'+id).then(res => res.json()).then((result) => {


    store.dispatch({type: 'FETCH_DAY_BOOKING', payload: formateEvents(result.items)});
  }).catch((err) => {
        console.error('Error', err); //eslint-disable-line
  });



};
const createEvent = (event,id) => {
  fetch('/event/'+id, {
    method: 'POST',
    payload:event,
    credentials:'include'}).then(res => res.json()).then(() => {
      getDayEvents();
    }).catch((err) => {
        console.error('Error', err); //eslint-disable-line
    });

};

const isLoggedIn = () => {
  fetch('/profile', {
    method: 'GET',
    credentials: 'include'
  }).then(res => {
    if (res.status === 200) {
      store.dispatch({type: 'CHANGE_CURRENT_VIEW', payload: 'HOME'});
      return res.json();
    } else {
      store.dispatch({type: 'CHANGE_CURRENT_VIEW', payload: 'LOBBY'});
      return {};
    }
  }).then((result) => {
    store.dispatch({type: 'UPDATE_PROFILE', payload: result});
  }).catch((err) => {
        console.log(err); //eslint-disable-line
    store.dispatch({type: 'CHANGE_CURRENT_VIEW', payload: 'HOME'});
    store.dispatch({type: 'UPDATE_PROFILE', payload: {}});
  });
};

const formateEvents = (events) => {
  var reformatEvents = events.map((obj)=>{
    return({
      title: obj.summary,
      start: new Date(obj.start.dateTime),
      end: new Date(obj.end.dateTime)
    });
  });
  return reformatEvents;
};

const logout = () => {
  fetch('/logout', {credentials: 'include'}).then((res) => {
    if (res.status === 200) {
      store.dispatch({type: 'CHANGE_CURRENT_VIEW', payload: 'LOBBY'});
      store.dispatch({type: 'UPDATE_PROFILE', payload: {}});
    }
  }).catch(err => {
    return err;
  });
};

const getRooms = () => {
  fetch('/rooms',{
    method:'GET'
  })
  .then(res =>res.json()).then((result) => {
    store.dispatch({type: 'FETCH_ROOMS', payload: result});
  })
  .catch(err => err);
};

const selectRoom = (id,room)=>{
  return {
    type:'SELECTED_ROOM',
    payload:{
      room_id:id,
      room_name:room
    }
  };
};


export {
    validEmail,
    insertUser,
    ChangeCurrentView,
    getDayEvents,
    isLoggedIn,
    logout,
    getRooms,
    selectRoom,
    createEvent
};
