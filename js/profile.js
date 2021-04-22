const user = auth.currentUser;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.


    var user = firebase.auth().currentUser;

    if (user != null){

      var name = user.displayName;
      var email_id = user.email;
      var email_verified = user.emailVerified;

      document.getElementById("user_info").innerHTML = "Email Address: " + email_id + "<br>Email Verified : " + email_verified;
    }

  } else {
    // No user is signed in.

  }
});



//LOGIN ------------------------------------------------------------------------------------------------------
function login(){

  var loginEmail = document.getElementById("userEmail").value;
  var loginPassword = document.getElementById("userPassword").value;

  firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error: " + errorMessage);
  });

} //End of login()

//LOGOUT ------------------------------------------------------------------------------------------------------
function logout(){
  firebase.auth().signOut();
}

//SIGN UP USER IN DATABASE source: Firebase code------------------------------------------------------------------------------------------------------


function creds(){
  var user = firebase.auth().currentUser;
  console.log(user);
}

//send email
function sendEmail(){
  var user = firebase.auth().currentUser;
  user.sendEmailVerification().then(function() {
    //Email sent.
    window.alert("Email verification sent. Please check your email for a link to verify your account.")
  })
}
