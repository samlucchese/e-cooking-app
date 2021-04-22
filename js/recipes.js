

firebase.auth().onAuthStateChanged(function(user) {

  if (user) {
    // User is signed in.
    console.log('User is logged IN: ', user.email);
    document.getElementById("logged-in").style.display = "block";
    document.getElementById("logged-out").style.display = "none";


    //get and show recipe data SHOWN JUST USING AUTHSTATECHANGE and querySnaphot
//AVOCADO TOAST RECIPE
    db.collection("Recipes").where("name", "==", "Avocado Toast").get().then((querySnapshot)=> {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
          //show recipe description
          arecipe_description.innerHTML += "<p class = 'montserrat' style = 'font-weight: 100; padding: 3%;'>" + doc.data().description + "</p>";
          //Cook Time
          arecipe_duration.innerHTML += "<h3 class = 'montserrat-recipe font-weight-bold'> Cook time: "  + doc.data().duration +  " minutes </h3>";
          //Show ingredients
          arecipe_ingredients.innerHTML += "<h3 class = 'montserrat-recipe font-weight-bold'> Ingredients: ";
          for (var i = 0; i < doc.data().ingredients.length; i++) {
            arecipe_ingredients.innerHTML += "<h4 class = 'montserrat-recipe-text text-muted'> - " + doc.data().ingredients[i]  + " </h4>";
          }
          //Preparation
          arecipe_prep.innerHTML += "<h3 class = 'montserrat-recipe font-weight-bold'> Preparation: ";
          for (var i = 0; i < doc.data().preparation.length; i++) {
            arecipe_prep.innerHTML += "<h4 class = 'montserrat-recipe-text text-muted'> - " + doc.data().preparation[i]  + " </h4>";
          }

      });
    }).catch((error) => {});

//SCRAMBLED EGGS RECIPE
    db.collection("Recipes").where("name", "==", "Slow-cooked Scrambled Eggs").get().then((querySnapshot)=> {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
          //show recipe description
          erecipe_description.innerHTML += "<p class = 'montserrat' style = 'font-weight: 100; padding: 3%;'>" + doc.data().description + "</p>";
          //Cook Time
          erecipe_duration.innerHTML += "<h3 class = 'montserrat-recipe font-weight-bold'> Cook time: "  + doc.data().duration +  " minutes </h3>";
          //Show ingredients
          erecipe_ingredients.innerHTML += "<h3 class = 'montserrat-recipe font-weight-bold'> Ingredients: ";
          for (var i = 0; i < doc.data().ingredients.length; i++) {
            erecipe_ingredients.innerHTML += "<h4 class = 'montserrat-recipe-text text-muted'> - " + doc.data().ingredients[i]  + " </h4>";
          }
          //Preparation
          erecipe_prep.innerHTML += "<h3 class = 'montserrat-recipe font-weight-bold'> Preparation: ";
          for (var i = 0; i < doc.data().preparation.length; i++) {
            erecipe_prep.innerHTML += "<h4 class = 'montserrat-recipe-text text-muted'> - " + doc.data().preparation[i]  + " </h4>";
          }


      });
    }).catch((error) => {});

//CASSEROLE RECIPE
    db.collection("Recipes").where("name", "==", "Breakfast Scramble Casserole").get().then((querySnapshot)=> {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
          //show recipe description
          casserole_recipe_description.innerHTML += "<p class = 'montserrat' style = 'font-weight: 100; padding: 3%;'>" + doc.data().description + "</p>";
          //Cook Time
          casserole_recipe_duration.innerHTML += "<h3 class = 'montserrat-recipe font-weight-bold'> Cook time: "  + doc.data().duration +  " minutes </h3>";
          //Show ingredients
          casserole_recipe_ingredients.innerHTML += "<h3 class = 'montserrat-recipe font-weight-bold'> Ingredients: ";
          for (var i = 0; i < doc.data().ingredients.length; i++) {
            casserole_recipe_ingredients.innerHTML += "<h4 class = 'montserrat-recipe-text text-muted'> - " + doc.data().ingredients[i]  + " </h4>";
          }
          //Preparation
          casserole_recipe_prep.innerHTML += "<h3 class = 'montserrat-recipe font-weight-bold'> Preparation: ";
          for (var i = 0; i < doc.data().preparation.length; i++) {
            casserole_recipe_prep.innerHTML += "<h4 class = 'montserrat-recipe-text text-muted'> - " + doc.data().preparation[i]  + " </h4>";
          }

      });
    }).catch((error) => {  });

    db.collection("Recipes").where("name", "==", "Classic Grilled Cheeseburger").get().then((querySnapshot)=> {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
          //show recipe description
          burger_recipe_description.innerHTML += "<p class = 'montserrat' style = 'font-weight: 100; padding: 3%;'>" + doc.data().description + "</p>";
          //Cook Time
          burger_recipe_duration.innerHTML += "<h3 class = 'montserrat-recipe font-weight-bold'> Cook time: "  + doc.data().duration +  " minutes </h3>";
          //Show ingredients
          burger_recipe_ingredients.innerHTML += "<h3 class = 'montserrat-recipe font-weight-bold'> Ingredients: ";
          for (var i = 0; i < doc.data().ingredients.length; i++) {
            burger_recipe_ingredients.innerHTML += "<h4 class = 'montserrat-recipe-text text-muted'> - " + doc.data().ingredients[i]  + " </h4>";
          }
          //Preparation
          burger_recipe_prep.innerHTML += "<h3 class = 'montserrat-recipe font-weight-bold'> Preparation: ";
          for (var i = 0; i < doc.data().preparation.length; i++) {
            burger_recipe_prep.innerHTML += "<h4 class = 'montserrat-recipe-text text-muted'> - " + doc.data().preparation[i]  + " </h4>";
          }

      });
    }).catch((error) => {  });

    db.collection("Recipes").where("name", "==", "Perfectly Grilled Ribeye").get().then((querySnapshot)=> {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
          //show recipe description
          ribeye_recipe_description.innerHTML += "<p class = 'montserrat' style = 'font-weight: 100; padding: 3%;'>" + doc.data().description + "</p>";
          //Cook Time
          ribeye_recipe_duration.innerHTML += "<h3 class = 'montserrat-recipe font-weight-bold'> Cook time: "  + doc.data().duration +  " minutes </h3>";
          //Show ingredients
          ribeye_recipe_ingredients.innerHTML += "<h3 class = 'montserrat-recipe font-weight-bold'> Ingredients: ";
          for (var i = 0; i < doc.data().ingredients.length; i++) {
            ribeye_recipe_ingredients.innerHTML += "<h4 class = 'montserrat-recipe-text text-muted'> - " + doc.data().ingredients[i]  + " </h4>";
          }
          //Preparation
          ribeye_recipe_prep.innerHTML += "<h3 class = 'montserrat-recipe font-weight-bold'> Preparation: ";
          for (var i = 0; i < doc.data().preparation.length; i++) {
            ribeye_recipe_prep.innerHTML += "<h4 class = 'montserrat-recipe-text text-muted'> - " + doc.data().preparation[i]  + " </h4>";
          }

      });
    }).catch((error) => {  });

    db.collection("Recipes").where("name", "==", "Gourmet Ham and Cheese Sandwiches").get().then((querySnapshot)=> {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
          //show recipe description
          sandwich_recipe_description.innerHTML += "<p class = 'montserrat' style = 'font-weight: 100; padding: 3%;'>" + doc.data().description + "</p>";
          //Cook Time
          sandwich_recipe_duration.innerHTML += "<h3 class = 'montserrat-recipe font-weight-bold'> Cook time: "  + doc.data().duration +  " minutes </h3>";
          //Show ingredients
          sandwich_recipe_ingredients.innerHTML += "<h3 class = 'montserrat-recipe font-weight-bold'> Ingredients: ";
          for (var i = 0; i < doc.data().ingredients.length; i++) {
            sandwich_recipe_ingredients.innerHTML += "<h4 class = 'montserrat-recipe-text text-muted'> - " + doc.data().ingredients[i]  + " </h4>";
          }
          //Preparation
          sandwich_recipe_prep.innerHTML += "<h3 class = 'montserrat-recipe font-weight-bold'> Preparation: ";
          for (var i = 0; i < doc.data().preparation.length; i++) {
            sandwich_recipe_prep.innerHTML += "<h4 class = 'montserrat-recipe-text text-muted'> - " + doc.data().preparation[i]  + " </h4>";
          }

      });
    }).catch((error) => {});

    db.collection("Recipes").where("name", "==", "Poppyseed Chicken").get().then((querySnapshot)=> {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
          //show recipe description
          chicken_recipe_description.innerHTML += "<p class = 'montserrat' style = 'font-weight: 100; padding: 3%;'>" + doc.data().description + "</p>";
          //Cook Time
          chicken_recipe_duration.innerHTML += "<h3 class = 'montserrat-recipe font-weight-bold'> Cook time: "  + doc.data().duration +  " minutes </h3>";
          //Show ingredients
          chicken_recipe_ingredients.innerHTML += "<h3 class = 'montserrat-recipe font-weight-bold'> Ingredients: ";
          for (var i = 0; i < doc.data().ingredients.length; i++) {
            chicken_recipe_ingredients.innerHTML += "<h4 class = 'montserrat-recipe-text text-muted'> - " + doc.data().ingredients[i]  + " </h4>";
          }
          //Preparation
          chicken_recipe_prep.innerHTML += "<h3 class = 'montserrat-recipe font-weight-bold'> Preparation: ";
          for (var i = 0; i < doc.data().preparation.length; i++) {
            chicken_recipe_prep.innerHTML += "<h4 class = 'montserrat-recipe-text text-muted'> - " + doc.data().preparation[i]  + " </h4>";
          }

      });
    }).catch((error) => {});


    var user = firebase.auth().currentUser;

    if (user != null){


    }

  } else {
    // No user is signed in.


    console.log('User is logged OUT: ', user);
    document.getElementById("logged-in").style.display = "none";
    document.getElementById("logged-out").style.display = "block";
  }
});





//RECIPE Display Template
/*
      db.collection("Recipes").where("name", "==", "recipe_name").get().then((querySnapshot)=> {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, "=>", doc.data());
            //show recipe description
            qburger_recipe_description.innerHTML += "<p class = 'montserrat' style = 'font-weight: 100; padding: 3%;'>" + doc.data().description + "</p>";
            //Cook Time
            qburger_recipe_duration.innerHTML += "<h3 class = 'montserrat-recipe font-weight-bold'> Cook time: "  + doc.data().duration +  " minutes </h3>";
            //Show ingredients
            qburger_recipe_ingredients.innerHTML += "<h3 class = 'montserrat-recipe font-weight-bold'> Ingredients: ";
            for (var i = 0; i < doc.data().ingredients.length; i++) {
              qburger_recipe_ingredients.innerHTML += "<h4 class = 'montserrat-recipe-text text-muted'> - " + doc.data().ingredients[i]  + " </h4>";
            }
            //Preparation
            qburger_recipe_prep.innerHTML += "<h3 class = 'montserrat-recipe font-weight-bold'> Preparation: ";
            for (var i = 0; i < doc.data().preparation.length; i++) {
              qburger_recipe_prep.innerHTML += "<h4 class = 'montserrat-recipe-text text-muted'> - " + doc.data().preparation[i]  + " </h4>";
            }

        });
      }).catch((error) => {
        console.log("Error getting document: ", error);
      });

      db.collection("Recipes").where("name", "==", "recipe_name").get().then((querySnapshot)=> {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, "=>", doc.data());
            //show recipe description
            test1_recipe_description.innerHTML += "<p class = 'montserrat' style = 'font-weight: 100; padding: 3%;'>" + doc.data().description + "</p>";
            //Cook Time
            test1_recipe_duration.innerHTML += "<h3 class = 'montserrat-recipe font-weight-bold'> Cook time: "  + doc.data().duration +  " minutes </h3>";
            //Show ingredients
            test1_recipe_ingredients.innerHTML += "<h3 class = 'montserrat-recipe font-weight-bold'> Ingredients: ";
            for (var i = 0; i < doc.data().ingredients.length; i++) {
              test1_recipe_ingredients.innerHTML += "<h4 class = 'montserrat-recipe-text text-muted'> - " + doc.data().ingredients[i]  + " </h4>";
            }
            //Preparation
            test1_recipe_prep.innerHTML += "<h3 class = 'montserrat-recipe font-weight-bold'> Preparation: ";
            for (var i = 0; i < doc.data().preparation.length; i++) {
              test1_recipe_prep.innerHTML += "<h4 class = 'montserrat-recipe-text text-muted'> - " + doc.data().preparation[i]  + " </h4>";
            }

        });
      }).catch((error) => {
        console.log("Error getting document: ", error);
      });
*/
