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

    // Check if ship is within the boundries
    if (
      (orientation === "horizontal" && x + length > 10) ||
      (orientation === "vertical" && y + length > 10)
    ) {
      console.log("Out of bounds");
      return false;
    }
    // Check if ship placement overlaps existing ships
    for (let i = 0; i < length; i++) {
      if (
        (orientation === "horizontal" && this.board[y][x + i] !== null) ||
        (orientation === "vertical" && this.board[y + i][x] !== null)
      ) {
        console.log("Ship is already placed in those coordinates");
        return false;
      }
    }
    // Place ship on board
    for (let i = 0; i < length; i++) {
      if (orientation === "horizontal") {
        this.board[y][x + i] = ship;
      } else {
        this.board[y + i][x] = ship;
      }
    }
    this.placedShips.push(ship);
  }
  // Returns true if all ships are sunk
  checkShipSunk() {
    return this.placedShips.every((ship) => ship.sunk);
  }
}
let gameBoard = new Gameboard();
gameBoard.placeShip(5, 0, 0, "horizontal");
gameBoard.placeShip(2, 1, 1, "vertical");
gameBoard.reciveAttack(0, 0);
gameBoard.reciveAttack(1, 0);
gameBoard.reciveAttack(2, 0);
gameBoard.reciveAttack(3, 0);
gameBoard.reciveAttack(4, 0);
console.log(gameBoard.checkShipSunk());
gameBoard.reciveAttack(1, 1);
gameBoard.reciveAttack(2, 1);
gameBoard.reciveAttack(1, 2);
console.log(gameBoard.checkShipSunk());
module.exports = Gameboard;
