//SIGN UP FORM JS

//to check the user's Name
function checkFirstName(){
  var userFirstName = document.getElementById("firstName").value;
  var flag = false;
  if (userFirstName === ""){
    flag = true;
  }
  if (flag){
    document.getElementById("firstNameError").style.display = "block";
  }
  else{
    document.getElementById("firstNameError").style.display = "none";
  }
}

//check last Name
function checkLastName(){
  var userLastName = document.getElementById("lastName").value;
  var flag = false;
  if (userLastName === ""){
    flag = true;
  }
  if (flag){
    document.getElementById("lastNameError").style.display = "block";
  }
  else{
    document.getElementById("lastNameError").style.display = "none";
  }
}

//check email
function checkEmail(){
  var userEmail = document.getElementById("userEmail");
  var userEmailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var flag;
  if (userEmail.value.match(userEmailFormat)){
    flag = false;
  }
  else {
    flag = true;
  }
  if (flag){
    document.getElementById("userEmailError").style.display = "block";
  }
  else{
    document.getElementById("userEmailError").style.display = "none";
  }
}

//check PASSWORD
function checkPassword(){
  var userPassword = document.getElementById("userPassword");
  var userPasswordFormat = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;
  var flag;
  if(userPassword.value.match(userPasswordFormat)){
        flag = false;
    }
    else{
        flag = true;
    }
    if(flag){
        document.getElementById("userPasswordError").style.display = "block";
    }else{
        document.getElementById("userPasswordError").style.display = "none";
    }
}
}

//SIGN UP AUTH IN FIREBASE
function signUp(){
  console.log("hi");
  var userFirstName = document.getElementById("firstName").value;
  var userLastName = document.getElementById("lastName").value;
  var userEmail = document.getElementById("userEmail").value;
  var userPassword = document.getElementById("userPassword").value;
  var userFirstNameFormat = /^([A-Za-z.\s_-])/;
  var userEmailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var userPasswordFormat = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;

  var firstNameValidCheck = userFirstName.match(userFirstNameFormat);
  var emailValidCheck = userEmail.match(userEmailFormat);
  var passwordValidCheck = userPassword.match(userPasswordFormat);

  if (firstNameValidCheck == null){
    return checkFirstName();
  }
  else if (lastName === "") {
    return checkLastName();
  }
  else if (emailValidCheck == null){
    return checkEmail();
  }
  else if (checkPassword == null) {
    return checkPassword();
  }
  else{
    firebase.auth()createUserWithEmailAndPassword(userEmail, userPassword).then((success) =>) {
      var user = firebase.auth().currentUser;
      var userid;
      if (user != null){
        userid = user.userid;
      }
      var userData = {
        userFirstName: userFirstName,
        userLastName: userLastName,
        userEmail: userEmail,
        userPassword: userPassword,
        //userBio: "User Biography"
      }
      firebaseRef.child(userid).set(userData);
    }
  }

}
