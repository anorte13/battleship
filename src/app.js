const Player = require("./js/player.js");
const Enemy = require("./js/helper/gameAI.js");

const enemyPlayer = new Enemy();
const playerOne = new Player();

playerOne.addShip(5, 0, 0, "horizontal", playerOne.player.board);

enemyPlayer.addShip(5, 0, 0, "horizontal", enemyPlayer.enemy.board);

enemyPlayer.attack(playerOne.player.board);
enemyPlayer.attack(playerOne.player.board);
