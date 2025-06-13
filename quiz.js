
// quiz.js
function checkAnswer() {
    let correctAnswer = "4"; // retrieval of the correct answer
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value; // retrieval of the user's selected answer
    if (userAnswer === correctAnswer) { // comparison of the user's answer with the correct answer
        document.getElementById("feedback").textContent = "Correct! Well done."; // feedback for correct answer
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!"; // feedback for incorrect answer
    }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer); // adding an event listener to the “Submit Answer” button