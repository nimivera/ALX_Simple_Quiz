function checkAnswer() {
  // Identify the correct answer
  const correctAnswer = "4";

  // Retrieve the user's answer
  const userAnswerElement = document.querySelector('input[name="quiz"]:checked');
  let userAnswer;
  if (userAnswerElement) {
      userAnswer = userAnswerElement.value;
  } else {
      document.getElementById('feedback').textContent = "Please select an answer.";
      return;
  }

  // Compare the user's answer with the correct answer
  const feedbackElement = document.getElementById('feedback');
  if (userAnswer === correctAnswer) {
      feedbackElement.textContent = "Correct! Well done.";
  } else {
      feedbackElement.textContent = "That's incorrect. Try again!";
  }
}

// Check if submit-answer button exists
const submitButton = document.getElementById('submit-answer');
if (submitButton) {
  submitButton.addEventListener('click', checkAnswer);
} else {
  console.error("Submit button not found");
}