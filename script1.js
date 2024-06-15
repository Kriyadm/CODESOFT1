document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('guessForm');
    const guessInput = document.getElementById('guessInput');
    const resultMessage = document.getElementById('resultMessage');
    const lowerBoundSpan = document.getElementById('lowerBound');
    const upperBoundSpan = document.getElementById('upperBound');

    let lowerBound = 1;
    let upperBound = 100;
    let secretNumber = generateRandomNumber(lowerBound, upperBound);

    lowerBoundSpan.textContent = lowerBound;
    upperBoundSpan.textContent = upperBound;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let guess = parseInt(guessInput.value);

        if (isNaN(guess) || guess < lowerBound || guess > upperBound) {
            resultMessage.textContent = `Please enter a number between ${lowerBound} and ${upperBound}.`;
            resultMessage.style.color = 'red';
        } else {
            checkGuess(guess);
        }

        guessInput.value = '';
    });

    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function checkGuess(guess) {
        if (guess < secretNumber) {
            resultMessage.textContent = 'Too low! Try again.';
            resultMessage.style.color = 'orange';
        } else if (guess > secretNumber) {
            resultMessage.textContent = 'Too high! Try again.';
            resultMessage.style.color = 'orange';
        } else {
            resultMessage.textContent = `Congratulations! You guessed the number ${secretNumber}.`;
            resultMessage.style.color = 'green';
            secretNumber = generateRandomNumber(lowerBound, upperBound); // Reset for a new game
        }
    }
});
