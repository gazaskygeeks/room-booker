import store from './store.js';
import {setToRightKeys} from './utils/utils.js';

const validEmail=(data)=>{
  const info = setToRightKeys(data);
  (info.email.includes('mhmd')||info.email.includes('@mercycorps.com'))?
  store.dispatch({type: 'AUTHORIZED_USER', payload: info}):
  store.dispatch({type: 'UNAUTHORIZED_USER', payload: null});
};
const insertUser = (data) => {
  fetch('/insertuser', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'content-type': 'application/json'
    }
  })
    .then(res => res.json())
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
export {validEmail,insertUser};
