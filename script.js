//variables to track the guesses
let playerGuesses = 0;
let maxGuesses = 3;
let computerNumber = generateRandomNumber();

//generate the random number - 1-10 inclusive
function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

//updat result div function
function updateResults(message) {
  document.getElementById("resultsgrid").textContent = "Results: " + message;
}

document
  .querySelector("#generateNumberButton")
  .addEventListener("click", function () {
    const playerInput = document.getElementById("playerInput").value;

    //make sure number has been selected
    if (playerInput == "") {
      alert("Please select a number.");
      return;
    }

    const playerChoice = parseInt(playerInput);
    const randomNumber = generateRandomNumber();

    //display no in computer choice
    document.getElementById("randomNumber").textContent = randomNumber;

    if (playerChoice === randomNumber) {
      updateResults("Correct!");
      resetGame();
    } else {
      playerGuesses++;
      if (playerGuesses >= maxGuesses) {
        updateResults("Game over, out of guesses!");
        resetGame();
      } else {
        updateResults(
          "Unlucky, try again! Guesses left: " + (maxGuesses - playerGuesses)
        );
      }
    }
  });

//Reset function
function resetGame() {
  playerGuesses = 0;
  document.getElementById("randomNumber").textContent = "?";
  document.getElementById("playerinput").value = "";
  computerNumber = generateRandomNumber();
}
