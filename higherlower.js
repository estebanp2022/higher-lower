let guessRange = document.querySelector(".guess-range");
let choice = window.prompt("Please pick a random number");
let num;
let guesses = [];

while (choice < 1 || isNaN(choice)) {
  alert("please enter a valid number");
  choice = window.prompt("Please pick a random number");
}

if (choice > 0) {
  num = Math.floor(Math.random() * choice) + 1;
  guessRange.textContent = `Guess a number between 1 and ${Math.round(choice)}`;
  console.log(num);
}

function do_guess() {
  let guess = Number(document.getElementById("guess").value);
  let message = document.getElementById("message");

  // guess is out of range
  if (guess > choice || guess < 1) {
    message.innerHTML = "That number is not in range, try again.";

    // if guess is larger than random number
  } else if (guess > num) {
    if (guesses.includes(guess)) {
      message.innerHTML = "You've guessed that number already, guess again.";
    } else {
      message.innerHTML = "No, try a lower number.";
      guesses.push(guess);
    }

    // if guess is lower than random number
  } else if (guess < num) {
    if (guesses.includes(guess)) {
      message.innerHTML = "You've guessed that number already, guess again.";
    } else {
      message.innerHTML = "No, try a higher number.";
      guesses.push(guess);
    }

    // if guess is not a number
  } else if (isNaN(guess)) {
    message.innerHTML = "That is not a number!";

    // if guess is a match
  } else {
    if (guesses.length === 0) {
      message.innerHTML = `You got it! It took you 1 try and your guess was ${guess}.`;
    } else {
      if (!guesses.includes(guess)) {
        guesses.push(guess);
      }
      message.innerHTML = `You got it! It took you ${
        guesses.length
      } tries and your guesses were ${guesses.join(", ")}.`;
    }
  }
}
