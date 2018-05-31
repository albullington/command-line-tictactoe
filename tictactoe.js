/* 
1 | 2 | 3
---------
4 | 5 | 6
---------
7 | 8 | 9
*/

var prompt = require('prompt');
var colors = require('colors/safe');

var board = {
  1: '', 
  2: '',
  3: '', 
  4: '', 
  5: '', 
  6: '',
  7: '', 
  8: '',
  9: '',
};

prompt.message = colors.rainbow("Enter your name");

prompt.start();

var displayBoard = function() {
  console.log('\n' +
  ' ' + board[1] + '  | ' + board[2] + ' | ' + board[3] + '\n' +
  ' --+--+---\n' +
  ' ' + board[4] + '  | ' + board[5] + ' | ' + board[6] + '\n' +
  ' --+--+---\n' +
  ' ' + board[7] + '  | ' + board[8] + ' | ' + board[9] + '\n');
}

var takeTurn = function() {
  
}

prompt.get(['player1', 'player2'], (err, result) => {
  console.log('Welcome to the game, ' + result.player1 + '(X) and ' + result.player2 + '(O)');
  displayBoard();
  console.log('Here is the board');
});