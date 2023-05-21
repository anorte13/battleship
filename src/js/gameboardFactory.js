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
    let target = this.board[y][x];

    if (target === null) {
      console.log("There was no target hit");
      this.missedAttacks.push({ x, y });
    } else if (typeof target === "object") {
      target.hit();
      if (target.isSunk()) {
        target.sunk = true;
        console.log(`Your ${target.name} has been sunk...`);
        return;
      }
    }
  }

  placeShip(length, x, y, orientation) {
    const ship = createShip(length);
    ship.name = returnShipName(length, this.placedShips);
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
  checkShipSunk() {
    console.log(this.placedShips);
  }
}
let gameBoard = new Gameboard();
gameBoard.placeShip(5, 0, 0, "horizontal");

module.exports = Gameboard;
