const user = auth.currentUser;

const signupForm = document.querySelector('#signUpbtn');
signupForm.addEventListener("click", function (e) {
  e.preventDefault();
  const email = document.getElementById("email_field").value;
  const password = document.getElementById("password_field").value;

  // create user
  auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = auth.currentUser;
    console.log("User creation Success: Info below..");
    console.log(user);
    user.sendEmailVerification().then(function() {
      //Email sent.
      window.alert("Email verification sent. Please check your email for a link to verify your account.");
    }).catch(function(error){
      alert('There was an error sending the email.')
    });
  }).catch(function(error){
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak. The password must be 6 characters longer or more.');
    }
    else if(errorCode == 'auth/email-already-in-use'){
      alert('This email address is already in use. Please log in or sign up with another email address.')
    }
    else if(errorCode == 'auth/invalid-email'){
      alert('This email address is invalid. Please make sure you have entered the correct information.')
    }
    else{
      alert(errorMessage);
    }
  });
}); //End of signUp()


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;

    if (user != null){

      var name = user.displayName;
      var email_id = user.email;
      var email_verified = user.emailVerified;

      if (email_verified){
        console.log("email is verified");
      }else{
        console.log("not verified");
      }

      document.getElementById("user_info").innerHTML =  "Email Address: " + email_id + "<br>Email Verified : " + email_verified;
      document.getElementById("cUser").innerHTML = email_id;
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
  user.sendEmailVerification().then(function() {
    //Email sent.
    window.alert("Email verification sent. Please check your email for a link to verify your account.")
  })
}
