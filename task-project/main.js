import './style.css'
import { questions } from "./counter";

let score = 0;

for (let i = 0; i < questions.length; i++) {
  const currentQuestion = questions[i];

  console.log(currentQuestion.question);

  for (let j = 0; j < currentQuestion.answers.length; j++) {
    console.log(`${j+1}. ${currentQuestion.answers[j]}`); 
  }

  const userAnswer = prompt("Please enter the number of your answer:");
  
  if (currentQuestion.answers[userAnswer-1] === currentQuestion.correctAnswer) {
    console.log("Correct!");
    score++;
  } else {
    console.log("Incorrect!");
  }

  console.log(`Your current score is: ${score}`);
  console.log("");
}

console.log(`You got ${score} out of ${questions.length} questions correct!`);
