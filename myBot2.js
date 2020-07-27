const moves = ["S", "R", "P", "D", "W"];
const movesWithoutDynamite = ["S", "R", "P", "W"];

class Bot {
  constructor() {
    this.dynamiteCounter = 0;
  }

  makeMove(gamestate) {
    if (this.dynamiteCounter < 100) {
      this.dynamiteCounter += 1;
      return moves[Math.floor(Math.random() * moves.length)];
    } else {
      return movesWithoutDynamite[
        Math.floor(Math.random() * movesWithoutDynamite.length)
      ];
    }
  }
}

module.exports = new Bot();
