const returnShipName = (length, arr) => {
  if (length === 5) {
    return "Carrier";
  } else if (length === 4) {
    return "Battleship";
  } else if (length === 3) {
    return "Submarine";
  } else {
    return "Destroyer";
  }
};

module.exports = returnShipName;
