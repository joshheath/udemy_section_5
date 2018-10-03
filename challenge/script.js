var Question = function(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  var q1 = new Question('1. What is 1+2?', ['0. 3', '1. 4'], 0);
  var q2 = new Question('2. What is the capital of England?', ['0. Paris', '1. London'], 1);
  var q3 = new Question('3. Are succulents cool?', ['0. Definitely not', '1. Obviously'], 1);

var questionsArray = [q1, q2, q3];
var randomQ = questionsArray[Math.floor(Math.random() * questionsArray.length)];

function AskQuestion(){
  console.log(randomQ.question);
  console.log(randomQ.answers);
}
