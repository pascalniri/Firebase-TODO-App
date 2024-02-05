// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCEJSyZKC4uFwKMmPWQoSeR5oYURYypagM",
    authDomain: "to-do-f3424.firebaseapp.com",
    databaseURL: "https://to-do-f3424-default-rtdb.firebaseio.com",
    projectId: "to-do-f3424",
    storageBucket: "to-do-f3424.appspot.com",
    messagingSenderId: "923526935751",
    appId: "1:923526935751:web:8cb7e802e005b2a2723ae2"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Reference to the Firebase database
  var database = firebase.database();
  var todoRef = database.ref('todos');