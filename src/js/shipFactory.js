const createShips = (length) => {
  //Create new ship object
  const ship = {};

  //Intialize properties of ship
  ship.length = length;
  ship.name = "";
  ship.hits = 0;
  ship.sunk = false;

  ship.hit = function () {
    if (ship.isSunk()) {
      return false;
    } else {
      this.hits += 1;
      console.log(`Current hits on this ${ship.name} : ${this.hits}`);
    }
  };
  ship.isSunk = function () {
    if (this.hits === this.length) {
      return true;
    } else {
      return false;
    }
  };
  return ship;
};

module.exports = createShips;
