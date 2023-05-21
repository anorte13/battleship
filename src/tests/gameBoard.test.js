const Gameboard = require("../js/gameboardFactory.js");
const ships = require("../js/shipFactory.js");

test("Creates a board with approporate amount of game pieces.", () => {
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
test("Checks if current ship is sunk", () => {
  let testBoard = new Gameboard();
  testBoard.placeShip(5, 0, 0, "horizontal");
  testBoard.reciveAttack(0, 0);
  testBoard.reciveAttack(1, 0);
  testBoard.reciveAttack(2, 0);
  testBoard.reciveAttack(3, 0);
  testBoard.reciveAttack(4, 0);
  expect(testBoard.board[0][0].sunk).toBe(true);
});
