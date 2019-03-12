// all the questions for the Game in an array
var starWarsQuestions = [{
    // question that would be displayed
    questionText: "What year was the first Star Wars released?",
    // options the user can choose from in an array
    options: ["1977", "2005", "1993", "1842"],
    // correct answer from the array of options
    answer: "1977",
    // picture for answer
    picture: "assets/images/newHope.png"
  },
  {
    questionText: "Which character has a double sided light saber?",
    options: ["Anikan Skywalker", "Luke", "Darth Maul", "Darth Vader"],
    answer: "Darth Maul",
    picture: "assets/images/darthMaul.png"
  },
  {
    questionText: "Why does Anikan go to the dark side?",
    options: ["For Fun", "The Jedi betrayed him", "He wanted a red light saber", "To become powerful enough to save the ones he loves"],
    answer: "To become powerful enough to save the ones he loves",
    picture: "assets/images/Anikian.png"
  },
  {
    questionText: "Who is Luke's real father?",
    options: ["Obi-Wan Kenobi", "Han Solo", "Darth Vader", "Owen Lars"],
    answer: "Darth Vader",
    picture: "assets/images/darthVader.png"
  },
  {
    questionText: "What color light saber does Mace Windu have?",
    options: ["Red", "Purple", "Green", "Blue"],
    answer: "Purple",
    picture: "assets/images/maceWindu.png"
  },
  {
    questionText: "Who shot first?",
    options: ["Han Solo", "Greedo", "", ""],
    answer: "Han Solo",
    picture: "assets/images/Han_12_3.jpg"
  }
]
// sets time to 15 for each question
var time = 15;
// variable interval for timer
var intervalId;
var intervalId2;
// variable for correct answers
var correctAnswers = 0;
// variable for incorrect answers
var wrongAnswers = 0;
// variable for unanswered questions
var unanswered = 0;
//  variable for each index in questions array
var i = 0;
// function that starts clock
function clockStart() {
  intervalId = setInterval(decrement, 1000);
}
// makes timer go down by 1 each second
function decrement() {
  time--;
  $("#timer").html(+time);
  // if user runs out of time it goes til next question
  if (time <= 0) {
    unanswered++;
    nextQuestion()
  }
}
// stops the timer
function clockStop() {
  clearInterval(intervalId);
}
// clears questions and options and displays image
function answerPicture() {
  // stops clock from running 
  clockStop()
  $(".question").empty();
  $("#optionOne").empty();
  $("#optionTwo").empty();
  $("#optionThree").empty();
  $("#optionFour").empty();
  $("#timer").empty();
  // puts image in div, pulls image from array
  $("#image-holder").html("<img src=" + starWarsQuestions[i].picture + " width='400px'>");
  intervalId2 = setInterval(nextQuestion, 3000);
}

//  when the page loads up it hides these divs from the user
$("#question").hide();
$("#optionOne").hide();
$("#optionTwo").hide();
$("#optionThree").hide();
$("#optionFour").hide();

// when the user presses the start div it shows the hidden divs and hides that start div
$("#startGame").on("click", function () {
  $(".start-div").hide();
  $("#question").show();
  $("#optionOne").show();
  $("#optionTwo").show();
  $("#optionThree").show();
  $("#optionFour").show();
  $(".next-div").show();
  // calls the function to start the clock
  clockStart()
});
// fuction empty out the questions and options and displays the results
function results() {
  // removes the timer
  $("timer").remove();
  $("#question").empty();
  $("#optionOne").empty();
  $("#optionTwo").empty();
  $("#optionThree").empty();
  $("#optionFour").empty();

  if (correctAnswers >= 3) {
    $("#optionFour").append("Great Job!");
  } else {
    $("#optionFour").append("Better luck next time!")
  }
  // shows the how many answers the person had right, wrong and un answered
  $("#right").append("Correct Answers: " + correctAnswers);
  $("#wrong").append("Wrong Answers: " + wrongAnswers);
  $("#unanswered").append("Unanswered Question: " + unanswered)
  clockStop()
}
// this function displays the next question when called by emptying the questions and options adding 1 to the i variable and
// and resets the time to 15 seconds
function nextQuestion() {
  $("#youAre").empty();
  $(".question").empty();
  $("#optionOne").empty();
  $("#optionTwo").empty();
  $("#optionThree").empty();
  $("#optionFour").empty();
  $("#timer").empty();
  $("#image-holder").empty();
  i++;
  time = 15;
  clearInterval(intervalId2);
  clockStart()

  // if variable i is less than the the length of the array of quesions then it calls the display question function
  if (i < starWarsQuestions.length) {
    displayQuestion()
  } else {
    // if i is greater or equal than it runs the results function ans runs the stop function
    results()
    clockStop()
  }
}

// displays the questions and options from the array of questions
function displayQuestion() {
  $(".question").append(starWarsQuestions[i].questionText);
  $("#optionOne").append(starWarsQuestions[i].options[0]);
  $("#optionTwo").append(starWarsQuestions[i].options[1]);
  $("#optionThree").append(starWarsQuestions[i].options[2]);
  $("#optionFour").append(starWarsQuestions[i].options[3]);
}
// calls the display function
displayQuestion()
// allows the user to click on an option div for ther answer
$(".options").on("click", function (e) {
  // creates a variable that of what the user clicks on, targets the text of the div
  var userAnswer = e.target.outerText;
  // creates a variable to equal the answer in the questions array
  var questionAnswer = starWarsQuestions[i].answer;
  // if the users answer is not equal to the answer of the in the array. then it adds 1 to the wrongs answer variable
  if (userAnswer != starWarsQuestions[i].answer) {
    // setInterval(rightAnswerPic, 3000);
    // wrongAnswersPic()
    wrongAnswers++;
    // adds text to the youAre div
    $("#youAre").text("Incorrect!");
  } else {
    // setInterval(wrongAnswersPic, 3000);
    // rightAnswerPic()
    // else it adds 1 to the correct answers variable
    correctAnswers++;
    // adds text to the youAre div
    $("#youAre").text("Correct!");
  }
  // then calls the next question function
  answerPicture()
});