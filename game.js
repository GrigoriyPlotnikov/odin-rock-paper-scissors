console.log('Hello World!');

function getComputerChoice() {
  const r = Math.random();
  if (r > 0.66) {
    return 'rock';
  } else if (r >= 0.33) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function getHumanChoice() {
  var q = false;
  var res = '';

  while (!q) {

    var res = prompt('Rock-paper-scissors').toLowerCase();

    switch (res) {
      case "rock":
      case "paper":
      case "scissors":
        q = true;
        break;
      default:
        console.log('invalid choice');
        break;
    }
  }

  return res;
}

function beats(choice1, choice2) {
  if (choice1 == 'rock' && choice2 == 'paper') {
    console.log('paper beats rock');
    return 1;
  }
  if (choice1 == 'rock' && choice2 == 'scissors') {
    console.log('rock beats scissors');
    return -1;
  }
  if (choice1 == 'scissors' && choice2 == 'paper') {
    console.log('scissors beats paper');
    return -1;
  }
  if (choice1 == 'scissors' && choice2 == 'rock') {
    console.log('rock beats scissors');
    return 1;
  }
  if (choice1 == 'paper' && choice2 == 'scissors') {
    console.log('scissors beats paper');
    return 1;
  }
  if (choice1 == 'paper' && choice2 == 'rock') {
    console.log('paper beats rock');
    return -1;
  }

  console.log('draw');
  return 0;
}

var humanScore = 0, computerScore = 0;

function playRound() {
  const humanChoice = getHumanChoice();
  console.log(`human choice ${humanChoice}`);
  const computerChoice = getComputerChoice();
  console.log(`computer choice ${computerChoice}`);

  const res = beats(computerChoice, humanChoice);
  if (res > 0)
    humanScore += 1;
  else if (res < 0)
    computerScore += 1;

  return res;
}

function playGame() {
  var rounds = 5;

  while (rounds > 0) {
    const res = playRound();
    if (res == 0)
      console.log('no round winner, try again');
    else {
      console.log(`Scores: computer ${computerScore}, human ${humanScore}`);
      rounds--;
    }
  }

  const winner = computerScore > humanScore
    ? 'computer'
    : 'human';

  console.log(`Winner is ${winner}`);
}