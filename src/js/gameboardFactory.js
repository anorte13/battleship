const createShip = require("../js/shipFactory.js");
const returnShipName = require("../js/helper/shipNames.js");

class Gameboard {
  constructor(board) {
    this.board = board || [];
    this.missedAttacks = [];
    this.placedShips = [];
    if (!this.board.length) this.createBoard();
  }
  // Creates a 10 x 10 gameboard
  createBoard() {
    this.board = Array(10)
      .fill(null)
      .map(() => Array(10).fill(null));
  }
  reciveAttack(x, y, board) {
    let target = board[y][x];

    if (target === null) {
      console.log("There was no target hit!");
      this.missedAttacks.push({ x, y });
      return false;
    } else if (typeof target === "object") {
      target.hit();
      if (target.isSunk()) {
        target.sunk = true;
        console.log(`Your ${target.name} has been sunk...`);
        return;
      }
      return true;
    }
  }

  placeShip(length, x, y, orientation, gameboard) {
    let ship = createShip(length);
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
        (orientation === "horizontal" && gameboard[y][x + i] !== null) ||
        (orientation === "vertical" && gameboard[y + i][x] !== null)
      ) {
        console.log("Ship is already placed in those coordinates");
        return false;
      }
    }
    // Place ship on board
    for (let i = 0; i < length; i++) {
      if (orientation === "horizontal") {
        gameboard[y][x + i] = ship;
      } else {
        gameboard[y + i][x] = ship;
      }
    }
    this.placedShips.push(ship);
  }
  // Returns true if all ships are sunk
  checkShipSunk() {
    return this.placedShips.every((ship) => ship.sunk);
  }
}
module.exports = Gameboard;
