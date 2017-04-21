import store from './store.js';
import {setToRightKeys} from './utils/utils.js';

const validEmail=(data)=>{
  const info = setToRightKeys(data);
  (info.email.includes('mhmd')||info.email.includes('@mercycorps.com'))?
  store.dispatch({type: 'AUTHORIZED_USER', payload: info}):
  store.dispatch({type: 'UNAUTHORIZED_USER', payload: null});
}
export {validEmail};
