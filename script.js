const playerScoreEl = document.getElementById('player-score');
const playerChoiceEl = document.getElementById('player-choice');
const computerScoreEl = document.getElementById('computer-score');
const computerChoiceEl = document.getElementById('computer-choice');
const resultText = document.getElementById('result-text');
const rulesBtn = document.getElementById('rules-button');
const rulesContainer = document.getElementById('rules-container');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.fa-solid');

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = '';

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

function resetSelected(){
  allGameIcons.forEach((icon) =>{
    icon.classList.remove('selected');
  });
}

function resetAll(){
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreEl.textContent = computerScoreNumber;
  playerChoiceEl.textContent ='';
  computerChoiceEl.textContent ='';
  resultText.textContent ='';
  resetSelected();
}

function selectComputer(){
  switch(computerChoice){
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = '--- Rock';
      break;

    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent = '--- Paper';
      break;

    case 'scissors':
    computerScissors.classList.add('selected');
    computerChoiceEl.textContent = '--- Scissors';
    break;

    case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiceEl.textContent = '--- Lizard';
      break;

    case 'spock':
      computerSpock.classList.add('selected');
      computerChoiceEl.textContent = '--- Spock';
      break;

    default:
      break;

  }
}


function computerRandomChoice(){
  const computerChoiceNumber = Math.floor(Math.random() * 5);
  if(computerChoiceNumber === 0){
    computerChoice = 'rock';
  } else if(computerChoiceNumber === 1){
    computerChoice ='paper';
  } else if(computerChoiceNumber === 2){
    computerChoice ='scissors';
  } else if(computerChoiceNumber === 3){
    computerChoice ='lizard';
  } else if (computerChoiceNumber === 4){
    computerChoice = 'spock';
  } else{
    console.log("error");
  }
  
}

function updateScore(playerChoice){
  if(playerChoice === computerChoice){
    resultText.textContent = "It's a tie!";
  } else{
    const choice = choices[playerChoice];
    if(choice.defeats.indexOf(computerChoice) >= 0){
      playerScoreNumber += 1;
      resultText.textContent = "You Won!";
      playerScoreEl.textContent = playerScoreNumber;
    } else{
      computerScoreNumber += 1;
      resultText.textContent = "You lost!";
      computerScoreEl.textContent = computerScoreNumber;
    }
  }

}

function checkResult(playerChoice){
  resetSelected();
  computerRandomChoice();
  selectComputer();
  updateScore(playerChoice);
}

// Passing player selection value and styling icons
function select(playerChoice){
  checkResult(playerChoice);
  switch(playerChoice){
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = '--- Rock';
      break;

    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = '--- Paper';
      break;

    case 'scissors':
    playerScissors.classList.add('selected');
    playerChoiceEl.textContent = '--- Scissors';
    break;

    case 'lizard':
      playerLizard.classList.add('selected');
      playerChoiceEl.textContent = '--- Lizard';
      break;

    case 'spock':
      playerSpock.classList.add('selected');
      playerChoiceEl.textContent = '--- Spock';
      break;

    default:
      break;

  }
}

let rulesShown = false;
function toggleRules(){
  if(!rulesShown){
    rulesContainer.classList.remove("hidden");
    rulesBtn.textContent = "Hide Rules";
    rulesShown = true;
  } else{
    rulesContainer.classList.add("hidden",);
    rulesBtn.textContent = "Show Rules";
    rulesShown = false;
  }
}

rulesBtn.addEventListener('click', toggleRules);

