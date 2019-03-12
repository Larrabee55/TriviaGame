var questions = ["what is number one"];

var option1 = [{
    anwser: "hello",
    value: 1
  },
  {
    anwser: "ok",
    value: 0
  }

];
var option2 = [{
    answer: "hi",
    value: 0
  },
  {
    answer: "no",
    value: 1
  }

];
var option3 = [{
    answer: "hmm",
    value: 0
  },
  {
    answer: "ooooo",
    value: 0
  }

];
var option4 = [{
    option: "ok",
    value: 0
  },
  {
    anwser: "fuck",
    value: 0
  }

];
var time;
var right = 0;
var wrong = 0;


for (i = 0; i <= questions.length; i++) {
  $(".question").empty();
  $(".option1").empty();
  $(".option2").empty();
  $(".option3").empty();
  $(".option4").empty();
  $(".question").text(questions[i]);
  $(".optionOne").text(option1[i]);
  console.log(option1[i].answer);
  $(".optionTwo").text(option2[i]);
  console.log(option2[i].answer);
  $(".optionThree").text(option3[i]);
  console.log(option3[i].answer);
  $(".optionFour").text(option4[i]);
  console.log(option4[i].answer);
  $(".next").on("click", function () {});

  // $(".radio-inline").on("click", function () {
  //   if (value = 1) {
  //     right++;
  //   } else {
  //     wrong++;
  //   }
  // });
}