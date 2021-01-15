//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCRMajKPYIsKFPF5E-YTJmFgHLbURAt4j8",
    authDomain: "kwitter-b384e.firebaseapp.com",
    databaseURL: "https://kwitter-b384e-default-rtdb.firebaseio.com",
    projectId: "kwitter-b384e",
    storageBucket: "kwitter-b384e.appspot.com",
    messagingSenderId: "55447781687",
    appId: "1:55447781687:web:e1d4ca94338ae000385ab2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser() {
      user_name = document.getElementById("user_input").value;
      firebase.database().ref("/").child(user_name).update({
          WorkDone: "We are sucessful and the project is complete" 
      });
          
      
  }