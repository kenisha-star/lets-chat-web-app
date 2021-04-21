function user_button() {
    n1=document.getElementById("login_name").value;
localStorage.setItem("person's name",n1);
window.location="kwitter_room.html";
}