;(function () {
  function TicTacToe (boardElement) {
    this.cells = [];
    this.populateTheBoard(boardElement);
    this.players = ['x', 'o'];
    this.isOPlaying = false;
  }

  TicTacToe.prototype.populateTheBoard = function (boardElement) {
    for (var i = 0; i < 9; i++) {
      var cell = new TicTacToe.Cell();
      this.cells.push(cell);
      cell.appendTo(boardElement);
    }
  }

  TicTacToe.prototype.currentPlayer = function () {
    var currentPlayer = this.players[+this.isOPlaying];
    this.isOPlaying = !this.isOPlaying;
    return currentPlayer;
  }

  TicTacToe.Cell = function (game) {
    this.view = new TicTacToe.Cell.View;
    this.view.respondToClick(this, game);
  }

  TicTacToe.Cell.View = function () {
    this.elt = document.createElement('div');
    this.elt.classList.add('cell');
  }

  TicTacToe.Cell.View.prototype.renderAsSelected = function (player) {
    this.elt.classList.add(player);
  }

  TicTacToe.Cell.View.prototype.respondToClick = function (cell) {
    this.elt.addEventListener('click', function () {
      if (cell.selected) return;
      cell.select(game.currentPlayer());
    });
  }

  TicTacToe.Cell.prototype.appendTo = function (domElt) {
    domElt.appendChild(this.view.elt);
  }

  TicTacToe.Cell.prototype.select = function (player) {
    this.selected = player;
    this.view.renderAsSelected(this.selected);
  }

  var game = new TicTacToe(document.getElementsByClassName('board')[0]);
})();
