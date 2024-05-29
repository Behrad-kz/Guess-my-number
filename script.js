
const check = document.querySelector('.check');
const htmlMassage = document.querySelector('.message');
const body = document.querySelector('body');
const number =  document.querySelector('.number');
const highscoreHtml = document.querySelector('.highscore'); 
const score1 = document.querySelector('.score'); 
const againBTN = document.querySelector('.again');
const htmlGuess = document.querySelector('.guess');

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// sending message functtion
const displayMessage = function(message) {
   htmlMassage.innerHTML = message;
}

check.addEventListener('click', function () {
   const guess = Number(htmlGuess.value);
  
   // When there is no input
  if (!guess) {
    displayMessage('⛔ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');
    number.innerHTML = secretNumber;
    body.style.backgroundColor = '#60b347';
    number.style.width = '300px';

    if(score > highscore) {
      highscore = score;
      highscoreHtml.innerHTML = highscore;
    }

    // when guess is wrong
  } else if(guess !== secretNumber) {
    if (score > 1) {
      displayMessage((guess > secretNumber) ? '📈 Too high!' : '📉 Too low!');
     
      //decreaseing the score number
      score--;
      score1.innerHTML = score;
      
    } else {
      displayMessage('💥 You lost the game!');
      score1.innerHTML = 0;
    }
  }
});

//reset event handler
againBTN.addEventListener('click', () => {

  // reset score 
  score = 20;

  // reset secret number
  secretNumber = Math.floor(Math.random() * 20) + 1;

  //reset message,score and number to initial values
  displayMessage('Start guessing...');
  score1.innerHTML = score;
  number.innerHTML = '?';
  htmlGuess.value = '';

  //reset css values
  body.style.backgroundColor = '#222';
  number.style.width = '150px';
});