//YOUR FIRE BASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyDdUptsvUtUPqBXcLceF2Ogs51WwpnVoWE",
  authDomain: "kwitter-8fe1b.firebaseapp.com",
  databaseURL: "https://kwitter-8fe1b-default-rtdb.firebaseio.com",
  projectId: "kwitter-8fe1b",
  storageBucket: "kwitter-8fe1b.appspot.com",
  messagingSenderId: "737574399567",
  appId: "1:737574399567:web:570632df3958a156f5c43a"
};

// Initialize Firebase


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);
	       console.log(message_data);
	       name = message_data['name'];
	       message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

        row = name_with_tag + message_with_tag +like_button + span_with_tag;       
        document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();


