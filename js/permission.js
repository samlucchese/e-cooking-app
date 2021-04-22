const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelectorAll('.account-details');

const setupUI = (user) => {

  //if user is logged in
  if (user) {
    //account Info
    //toggle UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');

  }
  //else user is logged out
  else {
    //hide account Details
    console.log("doesnt work");
    //toggle UI elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
};


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log('User is logged IN: ', user.email);
    setupUI(user);
    var user = firebase.auth().currentUser;

  } else {
    // No user is signed in.
    console.log('User is logged OUT: ', user);
    setupUI();
  }
});

function logout(){
  firebase.auth().signOut();
}
