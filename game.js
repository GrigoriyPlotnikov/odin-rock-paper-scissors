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

function isWin(win, other) {
  if (win == 'rock' && other == 'scissors')
    return true;
  if (win == 'scissors' && other == 'paper')
    return true;
  if (win == 'paper' && other == 'rock')
    return true;
  return false;
}

function initializeGame() {
  const logElement = document.getElementById('gamelog');

  function logMessage(message) {
    const li = document.createElement('li');
    li.textContent = message;
    logElement.appendChild(li);
  }

  function logWin(win, other) {
    logMessage(`${win} beats ${other}`);
  }

  function playRound(humanChoice, computerChoice) {
    logMessage(`human choice ${humanChoice}`);
    logMessage(`computer choice ${computerChoice}`);

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

  const userChoice = document.getElementById('user-choice');
  const computerChoice = document.getElementById('computer-choice');
  const outcome = document.getElementById('outcome');

  const buttons = document.querySelectorAll('.buttons button');

  const userScore = document.getElementById('user-score');
  const computerScore = document.getElementById('computer-score');

  buttons.forEach(element => {
    element.addEventListener('click', () => {
      userChoice.textContent = element.id;
      computerChoice.textContent = getComputerChoice();
      const winner = playRound(userChoice.textContent, computerChoice.textContent);
      if (winner == 'human') {
        outcome.textContent = 'You win!';
        logMessage('You win this round!');
        const userScoreValue = parseInt(userScore.textContent) || 0;
        userScore.textContent = userScoreValue + 1;
      } else if (winner == 'computer') {
        outcome.textContent = 'Computer wins!';
        logMessage('Computer wins this round!');
        const computerScoreValue = parseInt(computerScore.textContent) || 0;
        computerScore.textContent = computerScoreValue + 1;
      } else {
        outcome.textContent = "It's a tie!";
      }
    });
  });

  const resetButton = document.getElementById('reset-button');
  resetButton.addEventListener('click', () => {
    userScore.textContent = '0';
    computerScore.textContent = '0';
    userChoice.textContent = '';
    computerChoice.textContent = '';
    outcome.textContent = '';
    logElement.innerHTML = '';
  });
}

initializeGame();