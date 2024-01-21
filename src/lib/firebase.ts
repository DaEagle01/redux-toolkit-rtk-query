import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDZCE3Pq3B8hpnM0HjlzDAJRN64hWeiAcQ',
  authDomain: 'technet-rtk-query.firebaseapp.com',
  projectId: 'technet-rtk-query',
  storageBucket: 'technet-rtk-query.appspot.com',
  messagingSenderId: '64752318628',
  appId: '1:64752318628:web:e1ad08c200481b2cd38e31',
  measurementId: 'G-P9RTMKXXJK',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
