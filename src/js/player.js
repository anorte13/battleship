const Gameboard = require("../js/gameboardFactory.js");

class Player {
  constructor(name) {
    this.name = name;
    this.player = new Gameboard();
    this.ships = this.player.placedShips;
  }

  //Function to attack a ship
  attack(x, y, board) {
    if (this.player.reciveAttack(x, y, board)) {
      console.log("Successful hit on ENEMY ship!");
    }
  }
  addShip(length, x, y, orientation, gameboard) {
    this.player.placeShip(length, x, y, orientation, gameboard);
    console.log("Ship was added to PLAYER board");
  }
}

module.exports = Player;
