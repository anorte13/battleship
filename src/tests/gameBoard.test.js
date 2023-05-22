const Gameboard = require("../js/gameboardFactory.js");

test("Create a board with approporate amount of game pieces.", () => {
  let arr = [];
  let testBoard = new Gameboard();
  arr = Array(10)
    .fill(null)
    .map(() => Array(10).fill(null));
  expect(testBoard.board).toEqual(arr);
});
test("When recieve attack function is called, have target object hit count be updated", () => {
  let testboard = new Gameboard();
  testboard.placeShip(5, 0, 0, "horizontal");
  testboard.reciveAttack(0, 0);

  expect(testboard.board[0][0].hits).toBe(1);
});
test("Respond to a missed shot and adds it to array", () => {
  let testBoard = new Gameboard();
  testBoard.placeShip(5, 0, 0, "horizontal");
  testBoard.reciveAttack(1, 1);
  expect(testBoard.missedAttacks[0]).toMatchObject({ x: 1, y: 1 });
});
test("Check if current ship is sunk", () => {
  let testBoard = new Gameboard();
  testBoard.placeShip(5, 0, 0, "horizontal");
  testBoard.reciveAttack(0, 0);
  testBoard.reciveAttack(1, 0);
  testBoard.reciveAttack(2, 0);
  testBoard.reciveAttack(3, 0);
  testBoard.reciveAttack(4, 0);
  expect(testBoard.board[0][0].sunk).toBe(true);
});
test("Check to see if all ships have been sunk", () => {
  let testBoard = new Gameboard();
  testBoard.placeShip(5, 0, 0, "horizontal");
  testBoard.placeShip(2, 1, 1, "vertical");
  testBoard.reciveAttack(0, 0);
  testBoard.reciveAttack(1, 0);
  testBoard.reciveAttack(2, 0);
  testBoard.reciveAttack(3, 0);
  testBoard.reciveAttack(4, 0);
  testBoard.reciveAttack(1, 1);
  testBoard.reciveAttack(2, 1);
  testBoard.reciveAttack(1, 2);
  expect(testBoard.checkShipSunk()).toBe(true);
});
