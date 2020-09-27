//Game values
let min = 1 ,
    max = 10 ,
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;

//UI const
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessInput = document.querySelector('#guess-input');
const guessBTN = document.querySelector('#guess-btn');
const message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function (e) {
 
  if (e.target.className==='play-again') {
    window.location.reload();
  }
});

guessBTN.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  
  // Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }
  if(guess === winningNum){
    //Game Over - you win
    gameOver(true,`Game Over, you win! the correct number was ${winningNum}`);

  } else{
    guessesLeft-=1;
    if(guessesLeft===0){
      //Game Over - You lose
      gameOver(false,`Game Over, you lost. The correct number was ${winningNum}`)
      
    }else{
      //Game continue - answer wrong
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`,"red");
      guessInput.style.borderColor= 'red';
      guessInput.value='';
    }
  }

});

function setMessage(msg,color) {
  message.style.color = color;
  message.textContent = msg;
}

function gameOver(won,msg) {
    won === true? color='green' : color = 'red';
    guessInput.disabled = true;
    guessInput.style.borderColor= color;
    setMessage(msg,color);
    guessBTN.className += 'play-again';
    guessBTN.value='Play again'
}
function getRandomNum(){
  return Math.floor(Math.random()*(max-min-1)+min);
}
