const Gameboard = require("../gameboardFactory.js");

class Enemy {
  constructor(name) {
    this.name = "CPU";
    this.enemy = new Gameboard();
    this.ships = this.enemy.placedShips;
    this.enemyShips = [];
  }

  attack(board) {
    let x = Math.floor(Math.random() * (9 - 0 + 1) + 0);
    let y = Math.floor(Math.random() * (9 - 0 + 1) + 0);
    let coordinatesMatch = false;

    this.enemyShips.forEach((ship) => {
      if (ship.X === x && ship.Y === y) {
        console.log("You are attacking the same coordinates from last turn!");
        coordinatesMatch = true;
      }
    });
    if (coordinatesMatch) {
      return;
    }
    if (this.enemy.reciveAttack(x, y, board)) {
      console.log("Successful hit on PLAYER ship!");
      this.enemyShips.push({ X: x, Y: y });
    }
  }
  addShip(length, x, y, orientation, gameboard) {
    this.enemy.placeShip(length, x, y, orientation, gameboard);
    console.log("Ship was added to ENEMY board");
  }
}
module.exports = Enemy;
