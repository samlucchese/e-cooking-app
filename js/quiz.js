  function buildQuiz() {
    //VARIABLE TO STORE HTML output
    const output = [];

    myQuestions.forEach((currentQ, qNumber) => {

      //variable to store answer list
      const answers = [];

      //for each available answer
      for (letter in currentQ.answers) {

        answers.push(
          `<label>
        <input type = "radio" name = "question${qNumber}" value = "${letter}">
        ${letter} :
        ${currentQ.answers[letter]}
        </label>`
        );
      }

      output.push(
        `<div class = "" style = "text-align: left;">
          <div class = "question space"> <h4>${currentQ.question}</h4></div>
          <div class = "answers px-5"> ${answers.join("")} </div>
        </div>
      `
      );
    });

    //finally combine our output list into one string of html
    quizBox.innerHTML = output.join('');


  }

  function showResults() {
    resetQ.style.display = "inline-block";
    const answers = quizBox.querySelectorAll('.answers');
    // keep track of answers
    let correct = 0;
    //for each q
    myQuestions.forEach((currentQ, qNumber) => {
      //find selected answers
      const answerContainer = answers[qNumber];
      const choice = `input[name=question${qNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(choice) || {}).value;

      if (userAnswer === currentQ.correctAnswer) {
        //add to correct answer count
        correct++;
        //green
        answers[qNumber].style.color = 'green';
      } else {
        //red
        answers[qNumber].style.color = 'red';
      }
    });

    resultsBox.innerHTML = `You answered ${correct} out of ${myQuestions.length} questions correctly! Review your answers and then reset the quiz below.`;


  }

  function hideStart() {
    startBtn.style.display = "none";
    buildQuiz();
    submitBtn.style.display = "inline-block";

  }





  //variables
  const quizBox = document.getElementById('quiz');
  const resultsBox = document.getElementById('results');
  const submitBtn = document.getElementById('submit');
  const startBtn = document.getElementById('start');
  const resetQ = document.getElementById('reset')

  const myQuestions = [{

      question: "1. True or False: In the event of a grease fire, you should immediately pour water over it to extinguish the flames.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "2. Which temperature range correctly describes the 'Danger Zone'?",
      answers: {
        a: "100°F - 200°F",
        b: "40°F - 140°F",
        c: "80°F - 180°F"
      },
      correctAnswer: "b"
    },
    {
      question: "3. Which one of these methods should you NOT use to defrost meat?",
      answers: {
        a: "In the microwave",
        b: "On the counter at room temperature",
        c: "Placing it in the refrigerator overnight",
        d: "Under cold water, replacing the water every couple hours"
      },
      correctAnswer: "b"
    },
    {
      question: "4. To cook all chicken safely, it must be cooked to an internal temperature of at least: ",
      answers: {
        a: "145°F",
        b: "150°F",
        c: "160°F",
        d: "165°F"
      },
      correctAnswer: "d"
    },
    {
      question: "5. To cook all steak safely, it must be cooked to an internal temperature of at least: ",
      answers: {
        a: "145°F",
        b: "150°F",
        c: "160°F",
        d: "165°F"
      },
      correctAnswer: "a"
    },
    {
      question: "6. Fill in the blank: Each year, 1 in __ people get sick from contaminated food.",
      answers: {
        a: "3",
        b: "6",
        c: "9",
        d: "12"
      },
      correctAnswer: "b"
    },
    {
      question: "7. Why is it important to let meat rest for a short period after it is finished cooking?",
      answers: {
        a: "This ensures the juices have a chance to redistribute and not spill out.",
        b: "So we don't burn our mouths",
        c: "So we can take a picture to post before we eat it",
        d: "When the meat cools it becomes easier to cut"
      },
      correctAnswer: "a"
    },
    {
      question: "8. What are the two most common problems people have when cooking a chicken breast?",
      answers: {
        a: "Overcooked ends, Undercooked center",
        b: "Little fat, Little flavor",
        c: "It takes too long and turns out dry",
        d: "Both a and b"

      },
      correctAnswer: "d"
    },
    {
      question: "9. Fill in the blank: Cooking is usually considered a(n) _____ , while baking is considered a(n) _____",
      answers: {
        a: "science, art",
        b: "art, science",
        c: "hobby, skill",
        d: "skill, hobby"
      },
      correctAnswer: "b"
    },
    {
      question: "10. Sam Lucchese, the developer of this webpage, is from: ",
      answers: {
        a: "California",
        b: "Oklahoma",
        c: "Washington",
        d: "Texas"
      },
      correctAnswer: "d"
    }



  ];
  //show first slides









  //EVENT LISTENERS
  //on submit, show quiz results
  submitBtn.addEventListener('click', showResults);
  startBtn.addEventListener('click', hideStart);
