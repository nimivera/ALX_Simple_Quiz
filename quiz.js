function checkAnswer() {
    // Identify the correct answer
    const correctAnswer = "4";
  
    // Retrieve the user's answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
  
    // Compare the user's answer with the correct answer
    const feedbackElement = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
      feedbackElement.textContent = "Correct! Well done.";
    } else {
      feedbackElement.textContent = "That's incorrect. Try again!";
    }
  }
  
  // Add an event listener to the submit button
  document.getElementById('submit-answer').addEventListener('click', checkAnswer);