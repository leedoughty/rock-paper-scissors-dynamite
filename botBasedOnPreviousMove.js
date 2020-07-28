class Bot {
  constructor() {
    this.dynamiteCounter = 0;
  }

  returnDynamiteIfAnyLeft() {
    if (this.dynamiteCounter < 100) {
      this.dynamiteCounter++;
      return "D";
    } else {
      const moves = ["S", "R", "P", "W"];
      return moves[Math.floor(Math.random() * moves.length)];
    }
  }

  returnMoveBasedOnPreviousRound(lastRound) {
    if (lastRound.p2 === "S") {
      return "R";
    }
    if (lastRound.p2 === "R") {
      return "P";
    }
    if (lastRound.p2 === "P") {
      return "S";
    }
    if (lastRound.p2 === "W") {
      return "R";
    }
    if (lastRound.p2 === "D") {
      return "W";
    }
  }

  makeMove(gamestate) {
    console.log(gamestate);
    const previousRoundNumber = gamestate.rounds.length - 1;

    if (gamestate.rounds.length > 0) {
      return this.returnMoveBasedOnPreviousRound(
        gamestate.rounds[previousRoundNumber]
      );
    } else {
      return this.returnDynamiteIfAnyLeft();
    }
  }
}

module.exports = new Bot();
