import firebase from 'firebase/app';
import 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcIcFgldGy6FsmxMIViVY4GSb7je2UgBM",
    authDomain: "ud-vue-music.firebaseapp.com",
    projectId: "ud-vue-music",
    storageBucket: "ud-vue-music.appspot.com",
    messagingSenderId: "110592039608",
    appId: "1:110592039608:web:82c00bd613c3cd2ec5b24d"
  };

export default firebase.initializeApp(firebaseConfig);