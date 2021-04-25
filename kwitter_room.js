
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAuIcgG2aERRvjlV_m8rMvSccff-1mRlBQ",
    authDomain: "lets-chat-dd3cd.firebaseapp.com",
    databaseURL: "https://lets-chat-dd3cd-default-rtdb.firebaseio.com",
    projectId: "lets-chat-dd3cd",
    storageBucket: "lets-chat-dd3cd.appspot.com",
    messagingSenderId: "721690576028",
    appId: "1:721690576028:web:2b825c35e0547007705959",
    measurementId: "G-F65R0TPHJT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
