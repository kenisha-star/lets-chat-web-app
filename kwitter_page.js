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

  username=localStorage.getItem("person_name");
room_name=localStorage.getItem("room_name");


function send() {
   msg=document.getElementById("msg").value; 
firebase.database().ref(room_name).push({
   name:user_name, message:msg, likes:0 
});






}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();