    // get and show recipe data through INNERHTML method
    db.collection('Recipes').get().then(function(querySnapshot) {
      //norecipe_div.innerHTML += "There are no recipes until you log in."
        querySnapshot.forEach(function(doc) {
          //To list the available recipes by name
            recipe_div.innerHTML += "<h3> - "  +   doc.data().name + "</h3>"
        });

    })



firebase.auth().onAuthStateChanged(function(user) {





  if (user) {


    var user = firebase.auth().currentUser;

    if (user != null){

      var name = user.displayName;
      var email_id = user.email;
      var email_verified = user.emailVerified;

      document.getElementById("email").innerHTML = email_id;

    }

  } else {
    // No user is signed in.

  }
});

function logout(){
  firebase.auth().signOut();

}
