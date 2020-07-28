/* 
increment value of object when move is played by p2
find smallest value in object
play move to defeat smallest value in object, iterate through object to find smallest value
*/

class Bot {
  constructor() {
    this.dynamiteCounter = 0;
    this.frequenciesOfPlayerTwoMoves = {
      S: 0,
      P: 0,
      R: 0,
      W: 0,
      D: 0,
    };
    this.sortedFrequenciesOfPlayerTwoMoves;
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

  findLeastUsedMove() {
    this.sortedFrequenciesOfPlayerTwoMoves = Object.entries(
      this.frequenciesOfPlayerTwoMoves
    ).sort((a, b) => b[1] - a[1]);
    console.log(this.sortedFrequenciesOfPlayerTwoMoves[0][0]);
    return this.sortedFrequenciesOfPlayerTwoMoves[0][0];
  }

  playWinningMove() {
    if (this.sortedFrequenciesOfPlayerTwoMoves[0][0] === "S") {
      return "P";
    }
    if (this.sortedFrequenciesOfPlayerTwoMoves[0][0] === "R") {
      return "P";
    }
    if (this.sortedFrequenciesOfPlayerTwoMoves[0][0] === "P") {
      return "S";
    }
    if (this.sortedFrequenciesOfPlayerTwoMoves[0][0] === "W") {
      return "R";
    }
    if (this.sortedFrequenciesOfPlayerTwoMoves[0][0] === "D") {
      return "W";
    }
  }

  incrementfrequenciesOfPlayerTwoMoves(lastRound) {
    this.frequenciesOfPlayerTwoMoves[lastRound.p2]++;
  }

  makeMove(gamestate) {
    const previousRoundNumber = gamestate.rounds.length - 1;

    if (gamestate.rounds.length > 0) {
      this.incrementfrequenciesOfPlayerTwoMoves(
        gamestate.rounds[previousRoundNumber]
      );
    }
    this.findLeastUsedMove();
    return this.playWinningMove();
  }
}

module.exports = new Bot();
