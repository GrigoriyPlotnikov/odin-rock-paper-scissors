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
  var validChoice = false;
  var choice = '';

  while (!validChoice) {

    choice = prompt('Rock-paper-scissors').toLowerCase();

    switch (choice) {
      case "rock":
      case "paper":
      case "scissors":
        validChoice = true;
        break;
      default:
        console.log('invalid choice');
        break;
    }
  }

  return choice;
}

function isWin(win, other) {
  if (win == 'rock' && other == 'scissors')
    return true;
  if (win == 'scissors' && other == 'paper')
    return true;
  if (win == 'paper' && other == 'rock')
    return true;
  return false;
}

function logWin(win, other) {
  console.log(`${win} beats ${other}`);
}

function playRound() {
  const humanChoice = getHumanChoice();
  console.log(`human choice ${humanChoice}`);
  const computerChoice = getComputerChoice();
  console.log(`computer choice ${computerChoice}`);

  if (isWin(humanChoice, computerChoice)) {
    logWin(humanChoice, computerChoice);
    return 'human';
  }
  else if (isWin(computerChoice, humanChoice)) {
    logWin(computerChoice, humanChoice);
    return 'computer';
  }

  return '';
}

function playGame() {
  var rounds = 5,
    humanScore = 0,
    computerScore = 0;

  while (rounds > 0) {
    const winner = playRound();
    if (winner == 'computer') {
      computerScore += 1;
    } else if (winner == 'human') {
      humanScore += 1;
    } else {
      console.log('no round winner, try again');
      continue;
    }
    rounds--;
    console.log(`Scores: computer ${computerScore}, human ${humanScore}`);
  }

  const winner = computerScore > humanScore
    ? 'computer'
    : 'human';

  console.log(`Winner is ${winner}`);
}