function createShips(length) {
  //Create new ship object
  const ship = {};

  //Intialize properties of ship
  ship.length = length;
  ship.hits = 0;
  ship.sunk = false;

  ship.hit = function () {
    this.hits += 1;
    console.log(`Current hits on this ship: ${this.hits}`);
    this.isSunk();
  };
  ship.isSunk = function () {
    if (this.hits === this.length) {
      console.log("This ship has been sunk");
    } else {
      return;
    }
  };
  return ship;
}

export { createShips };
