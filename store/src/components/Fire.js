import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAdIOwKAQ7XxSu6l8at5CmOxzWfgxMYBAA",
    authDomain: "store-master-d9570.firebaseapp.com",
    databaseURL: "https://store-master-d9570.firebaseio.com",
    projectId: "store-master-d9570",
    storageBucket: "store-master-d9570.appspot.com",
    messagingSenderId: "298256510437"
  };

  const fire = firebase.initializeApp(config);
  export default fire;
