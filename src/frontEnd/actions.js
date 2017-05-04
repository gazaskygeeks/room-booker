import store from './store.js';
import {
  setToRightKeys
} from './utils/utils.js';


const validEmail = (data) => {
  const info = setToRightKeys(data);
  (info.email.includes('mhmd') || info.email.includes('@mercycorps.com')) ?
  store.dispatch({
    type: 'AUTHORIZED_USER',
    payload: info
  }):
    store.dispatch({
      type: 'UNAUTHORIZED_USER',
      payload: null
    });
};
const insertUser = (data) => {
  fetch('/user', {
    method: 'POST',
    body: JSON.stringify(data),
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'content-type': 'application/json'
    }
  }).then(res => res.json())
    .then((result) => {
      store.dispatch({
        type: 'AUTHORIZED_USER',
        payload: result
      });
    }).catch((err) => {
      store.dispatch({
        type: 'UNAUTHORIZED_USER',
        payload: err
      });
    });
};

const ChangeCurrentView = (currentView) => {
  return {
    type: 'CHANGE_CURRENT_VIEW',
    payload: currentView
  };
};

const getDayEvents = () => {
  fetch('/event', {
    method: 'GET'

  }).then(res => res.json())
    .then((result) => {
      store.dispatch({
        type: 'FETCH_DAY_BOOKING',
        payload: formateEvents(result),
      });
    })
    .catch((err) => {
      console.error('Error', err); //eslint-disable-line
    });

};

const isLoggedIn = () => {
  fetch('/profile', {
    method: 'GET',
    credentials: 'include'
  }).then(res => {
    if (res.status === 200) {
      store.dispatch({
        type: 'CHANGE_CURRENT_VIEW',
        payload: 'HOME'
      });
      return res.json();

    } else {
      store.dispatch({
        type: 'CHANGE_CURRENT_VIEW',
        payload: 'LOBBY'
      });
      return {};
    }
  }).then((result) => {
    store.dispatch({
      type: 'UPDATE_PROFILE',
      payload: result
    });
  }).catch((err) => {
    console.log(err); //eslint-disable-line
    store.dispatch({
      type: 'CHANGE_CURRENT_VIEW',
      payload: 'HOME'
    });
    store.dispatch({
      type: 'UPDATE_PROFILE',
      payload: {}
    });
  });
};

const formateEvents = (events) => {
  var reformatEvents = events.map(function(obj) {
    var rObj = {};
    rObj['title'] = obj.summary;
    rObj['start'] = new Date(obj.start.dateTime);
    rObj['end'] = new Date(obj.end.dateTime);
    return rObj;
  });
  return reformatEvents;
};

export {
  validEmail,
  insertUser,
  ChangeCurrentView,
  getDayEvents,
  isLoggedIn
};
