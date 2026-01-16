let randomNumber = Math.floor(Math.random() * 100) + 1;
let count = 0;

function checkGuess() {
    let guess = document.getElementById("guessInput").value;
    let message = document.getElementById("message");
    let attempts = document.getElementById("attempts");

    if (guess === "") {
        message.innerText = "Please enter a number!";
        return;
    }

    count++;

    if (guess > randomNumber) {
        message.innerText = "⬆️ Too High!";
    } else if (guess < randomNumber) {
        message.innerText = "⬇️ Too Low!";
    } else {
        message.innerText = "🎉 Correct! You guessed it!";
    }

    attempts.innerText = "Attempts: " + count;
}
