import {initializeApp} from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apikey: 'AIzaSyBCnR40bCjoLpnvWXBcvy-XgW2eBuSZ_O8',
  authDomain: 'nhom13-ccptpm.firebaseapp.com',
  databaseURL:
    'https://nhom13-ccptpm-default-rtdb.asia-southeast1.firebasedatabase.app/',
  projectId: 'nhom13-ccptpm',
  appId: '1:946660470548:android:7c17c74b967a9fb6091c01',
  storageBucket: 'nhom13-ccptpm.appspot.com',
  messagingSenderId: '946660470548',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firebaseDatabase = getDatabase();
export {auth, firebaseDatabase, createUserWithEmailAndPassword};
