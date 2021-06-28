var firebaseConfig = {
    apiKey: "AIzaSyCTZrGl2msq-_ILI1o8XVRsLdFBgajEP8A",
    authDomain: "kwitter-23f44.firebaseapp.com",
    databaseURL: "https://kwitter-23f44-default-rtdb.firebaseio.com/",
    projectId: "kwitter-23f44",
    storageBucket: "kwitter-23f44.appspot.com",
    messagingSenderId: "62771781903",
    appId: "1:62771781903:web:c50a26a18b0623e5915e7a"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();