$(document).ready(function() {

  var colorArray = ["#842f32", "#df6747", "#146b3a"];
  var cardState;
  var currentQuestion = 0;
  var qbank = new Array;



  loadDB();

  function loadDB() {
    console.log("here");
    $.getJSON("activity.json", function(data) {
      for (i = 0; i < data.termList.length; i++) {
        qbank[i] = [];
        qbank[i][0] = data.termList[i].cardfront;
        qbank[i][1] = data.termList[i].cardback;
      } //for
      beginActivity();
    }) //gtjson
  } //loadDB

  function beginActivity() {
    cardState = 0;
    var color1 = colorArray[Math.floor(Math.random() * colorArray.length)];
    $("#cardArea").empty();
    $("#cardArea").append('<div id="card1" class="card" style = "display: flex; justify-content: center; align-items: center;">' + qbank[currentQuestion][0] + '</div>');
    $("#cardArea").append('<div id="card2" class="card bg-dark" style = "display: flex; justify-content: center; align-items: center;">' + qbank[currentQuestion][1] + '</div>');
    $("#card1").css("background-color", color1);
    $("#card2").css("background-color", "#34495E");
    $("#card2").css("top", "350px");
    $("#cardArea").on("click", function() {
      if (cardState != 1) {
        cardState = 1;
        //togglePosition();
        $("#card1").animate({
          top: "-=350"
        }, 200, function() {
          cardState = 0;
          togglePosition();
        });
        $("#card2").animate({
          top: "-=350"
        }, 200, function() {
          togglePosition2();
        });
      } //if
    }); //click function
    currentQuestion++;

    $("#buttonArea").empty();
    $("#buttonArea").append('<div id="nextButton"  class = "btn btn-success center" onclick = "count()">NEXT</div>');
    $("#nextButton").on("click", function() {
      if (currentQuestion < qbank.length) {
        beginActivity();

      } else {
        displayFinalMessage();
      }
    });
    //click function
  } //beginactivity

  function togglePosition() {
    if ($("#card1").position().top == -350) {
      $("#card1").css("top", "350px");
    };
  } //toggle

  function togglePosition2() {
    if ($("#card2").position().top == -350) {
      $("#card2").css("top", "350px");
    };
  } //toggle2

  function displayFinalMessage() {
    $("#buttonArea").empty();
    $("#cardArea").empty();
    $("#cardArea").append('<div id="finalMessage">You are finished with this set. <br>Click the button below to practice some more, or return to the home screen and keep learning.</div>');
    $("#restart").append('<br><div id="restartBtn" class = "btn btn-primary btn-block center">Click to restart</div>');
    $("#restartBtn").on("click", function() {
      document.location.reload(true);
    });

  } //final message
});
console.log("done");

var clicks = 1;

function count() {
  clicks++;
  if (clicks < 19){
    document.getElementById("clicks").innerHTML = clicks;
  }
  else{
    document.getElementById("clicks").innerHTML = 19;
  }

}
