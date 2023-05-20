const returnShipName = (length) => {
  if (length === 5) {
    return "Carrier";
  } else if (length === 4) {
    return "Battleship";
  } else if (length === 3) {
    return "Crusier" || "Submarine";
  } else {
    return "Destroyer";
  }
};

module.exports = returnShipName;
