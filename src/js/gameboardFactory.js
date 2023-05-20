const createShip = require("../js/shipFactory.js");
const returnShipName = require("../js/helper/shipNames.js");

class Gameboard {
  constructor(board) {
    this.board = board || [];
    this.missedAttacks = [];
    this.placedShips = [];
    if (!this.board.length) this.createBoard();
  }
  createBoard() {
    this.board = Array(10)
      .fill(null)
      .map(() => Array(10).fill(null));
  }
  reciveAttack(x, y) {
    const target = this.board[y][x];

    if (target === null) {
      console.log("There was no target hit");
      this.missedAttacks.push({ x, y });
    } else if (typeof target === "object") {
      let ship = this.board[y][x];
      ship.hit();
      console.log(ship);
      console.log("You landed a hit");
    }
  }
  placeShip(length, x, y, orientation) {
    const ship = createShip(length);
    ship.name = returnShipName(length);
    if (
      (orientation === "horizontal" && x + length > 10) ||
      (orientation === "vertical" && y + length > 10)
    ) {
      console.log("Out of bounds");
      return false;
    }
    for (let i = 0; i < length; i++) {
      if (orientation === "horizontal") {
        this.board[y][x + i] = ship;
      } else {
        this.board[y + i][x] = ship;
      }
    }
    this.placedShips.push(ship);
  }
}
const game = new Gameboard();
game.placeShip(5, 0, 0, "horizontal");
game.placeShip(4, 2, 3, "vertical");
game.placeShip(2, 10, 2, "horizontal");
game.reciveAttack(0, 0);
game.reciveAttack(1, 0);
game.reciveAttack(2, 0);
game.reciveAttack(3, 0);
game.reciveAttack(4, 0);
