const returnShipName = (length, arr) => {
  if (length === 5) {
    return "Carrier";
  } else if (length === 4) {
    return "Battleship";
  } else if (length === 3) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  } else {
    return "Destroyer";
  }
};

module.exports = returnShipName;
