
// This syncs the app with firebase database
var config = {
    apiKey: "AIzaSyBJm9pe3vx0NHlxTspQXvySDz7t_f6mRO4",
    authDomain: "trainschedule-5ecc3.firebaseapp.com",
    databaseURL: "https://trainschedule-5ecc3.firebaseio.com",
    projectId: "trainschedule-5ecc3",
    storageBucket: "trainschedule-5ecc3.appspot.com",
    messagingSenderId: "903773178719"
  };

  firebase.initializeApp(config);

// This assigns the firebase database to the database variable
var database = firebase.database();

// These are the variables we will need to hold the data submitted and displayed
var name = "";
var destination = "";
var firstTrain = "";
var frequency = "";
var arrival = "";
var minutes = 0

  $(document).on("click", "#submit", function() {
      
      name = $("#name-input").val().trim();
      destination = $("#destination-input").val().trim();
      firstTrain = $("#time-input").val().trim();
      frequency = $("#frequency-input").val().trim();
    
      database.ref().push({
        name: name,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
    console.log(name);
    });
    

    database.ref().on("child_added", function(childSnapshot) {
      console.log(childSnapshot.val())
     $("#trains").append(
       "<tr><th scope='row'>" + childSnapshot.val().name + "</th>" +
       "<td>" + childSnapshot.val().destination + "</td>" +
       "<td>" + childSnapshot.val().frequency + "</td>" +
       "<td>" + "Next arrival:TBD" + "</td>" +
       "<td>" + "Minutes away:TBD" + "</td>" +
       "</tr>"
      );
  });
  
    //   database.ref().on("child_added", function(childSnapshot) {
    //       console.log(childSnapshot.val())
    //      $("#nameDiv").append("<div>" + childSnapshot.val().name + "</div>");
    //      $("#roleDiv").append("<div>" + childSnapshot.val().role + "</div>");
    //      $("#startDiv").append("<div>" + childSnapshot.val().startDate + "</div>");
    //      $("#monthsDiv").append("<div>" + childSnapshot.val().placeholder + "</div>");
    //      $("#rateDiv").append("<div>" + childSnapshot.val().monthlyRate + "</div>");
    //      $("#billedDiv").append("<div>" + childSnapshot.val().placeholder + "</div>");
    //   }); 
