
//initialize cloud firestore
//var db = firebase.firestore();

function sendFeedback(){

  var name= document.getElementById('name').value;
  var email= document.getElementById('email').value;
  var subject= document.getElementById('subject').value;
  var message= document.getElementById('message').value;
  //add a new document to feedback collection
  db.collection("Feedback").doc().set({
    name: name,
    email: email,
    subject: subject,
    message: message
  })
  .then(function() {
    console.log("Feedback successfully sent!");
    window.alert('Thanks! Your feedback was sent and will be reviewed by our team.');
  })
  .catch(function(error) {
    console.error("Error writing feedback: ", error);
  });
}

function logout(){
  firebase.auth().signOut();
}
