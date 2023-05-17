const createShip = require("../js/shipFactory.js");

test("Creates a Carrier ship given the length of 5", () => {
  expect(createShip(5)).toMatchObject({
    length: 5,
    hits: 0,
    sunk: false,
  });
});
test("Accepts a hit", () => {
  let testCarrier = createShip(5);
  testCarrier.hit();
  expect(testCarrier.hits).toEqual(1);
});
test("Returns FALSE when ship has less hits given than length", () => {
  let testCarrier = createShip(5);
  testCarrier.hit();
  expect(testCarrier.isSunk()).toEqual(false);
});
test("Returns TRUE for isSunk function when ship hits is equal to length", () => {
  let testCarrier = createShip(5);
  testCarrier.hit();
  testCarrier.hit();
  testCarrier.hit();
  testCarrier.hit();
  testCarrier.hit();
  expect(testCarrier.isSunk()).toEqual(true);
});
