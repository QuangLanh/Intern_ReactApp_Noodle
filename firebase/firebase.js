import * as firebase from 'firebase';
//import 'firebase/database';

const Config = {
  apiKey: 'AIzaSyDn79ys3LZrEPujoFJPkh57gZ-x-DD8lTM',
  authDomain: 'awesome-34dc7.firebaseapp.com',
  databaseURL: 'https://awesome-34dc7-default-rtdb.firebaseio.com',
  projectId: 'awesome-34dc7',
  storageBucket: 'awesome-34dc7.appspot.com',
  messagingSenderId: '896277201741',
  appId: '1:896277201741:web:6345b8b5a7eb9809632d04',
  measurementId: 'G-01G0FQNG3K',
};
export default firebaseConfig = firebase.initializeApp(Config);
