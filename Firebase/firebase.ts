import {initializeApp} from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apikey: 'AIzaSyBA-p_h4k19qNHyHFeCTZPv-ZaQLs3_zCo',
  authDomain: 'group-13-9a8ff.firebaseapp.com',
  databaseURL:
    'https://group-13-9a8ff-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'group-13-9a8ff',
  appId: '1:30209707286:android:623462a2c902e86a549437',
  storageBucket: 'group-13-9a8ff.appspot.com',
  messagingSenderId: '30209707286',
};
export const app = initializeApp(firebaseConfig);
