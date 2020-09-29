//--Imports
import { compareNumbers } from './utils.js';

// elements from DOM
const userGuess = document.getElementById('input');
const image = document.getElementById('image');
const submit = document.getElementById('submit');
const message = document.getElementById('message');
const tryAgain = document.getElementById('tryAgain');
 
// global states
let totalGuesses = 3;
let actualNumber = Math.ceil(Math.random() * 5);
console.log(actualNumber);

submit.addEventListener('click', () => {
    
    const guess = Number(userGuess.value);
    
    const compareResults = compareNumbers(guess, actualNumber);
    console.log(compareResults, guess, actualNumber);
    
    if (compareResults === 0) {
        message.textContent = 'Congratulations!!!!! YOU WIN!!!!';
        image.src = './assets/win.jpg';
        submit.style.display = 'none';
        tryAgain.style.display = 'block';
        userGuess.style.display = 'none';
        return;
    }
    if (compareResults === 1) {
        message.textContent = `Your guess was too high! Try again you have ${totalGuesses} left!`;
    }
    if (compareResults === -1) {
        message.textContent = `Your guess was too low! Try agin you have ${totalGuesses} left!`;
    }
    totalGuesses--;
    if (totalGuesses === 0) {
        image.src = './assets/fail.jpg';
        message.textContent = 'you are out of guesses Try Again!';
        submit.style.display = 'none';
        tryAgain.style.display = 'block';
        userGuess.style.display = 'none';
        return;
    }

   
});