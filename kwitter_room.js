
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
 document.getElementById("user_name1").innerHTML="Welcome To"+username;

function add_room() {
room_name=document.getElementById("room").value;
firebase.database().ref("/").child(room_name).update
({ child1name: "adding one room name" });
localStorage.setItem("room_name", room_name);
 window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();
function log() {
localStorage.removeItem("person_name");
localStorage.removeItem("user_room_name");

  window.location="index.html";
}