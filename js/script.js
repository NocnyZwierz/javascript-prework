
let playerInput = prompt ('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
//NTUI - Never trust user input
if (playerInput <1 || playerInput >3) {
    prompt (" wybierz jeszcze raz")
} 

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == '1') {
    playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier';
} else if (playerInput == '3') {
    playerMove = 'nożyce';
}

  printMessage('Twój ruch to: ' + playerMove);

