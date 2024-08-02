function playGame(playerInput) {

  clearMessages(); 

  function getMoveName (argMovID) {
    if(argMovID == 1) {
      return 'kamień';
    } else if (argMovID == 2) {
      return 'papier';
    } else if (argMovID == 3) {
      return 'nożyce';
    }
  };

  function displayResult (argPlayerMove, argComputerMove) {
    if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
      printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
      printMessage('Komputer wygrywa!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
      printMessage('Komputer wygrywa!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
      printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
      printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
      printMessage('Komputer wygrywa!');
    } else if (argComputerMove === argPlayerMove) {
      printMessage('Remis!');
    } else {
      printMessage('Nieznany ruch!');
    }
    console.log('moves:', argComputerMove, argPlayerMove);
  };

  let randomNumber = Math.floor(Math.random() * 3 + 1);
  // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
  console.log('Komputer wybrał: ' + randomNumber);
  console.log('Gracz wybrał: ' + playerInput);


  let computerMove = getMoveName (randomNumber);
  let playerMove = getMoveName (playerInput);


  console.log(computerMove);
  console.log(playerMove);

  displayResult (playerMove, computerMove);
};

document.getElementById('play-rock').addEventListener('click', function() {playGame(1)});
document.getElementById('play-paper').addEventListener('click', function() {playGame(2)});
document.getElementById('play-scissors').addEventListener('click', function() {playGame(3)});

