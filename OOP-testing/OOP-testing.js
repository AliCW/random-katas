class SnookerTable {
  constructor(
    credit = 0,
    turn = true,
    redFlag = false,
    pocketedBalls = {
      red: { quantity: 15 },
      yellow: { quantity: 1 },
      green: { quantity: 1 },
      brown: { quantity: 1 },
      blue: { quantity: 1 },
      pink: { quantity: 1 },
      black: { quantity: 1 },
    },
    activeBalls = {
      red: { quantity: 0 },
      yellow: { quantity: 0 },
      green: { quantity: 0 },
      brown: { quantity: 0 },
      blue: { quantity: 0 },
      pink: { quantity: 0 },
      black: { quantity: 0 },
    },
    scoreBoard = {
      player1: 0,
      player2: 0,
    }
  ) {
    this.credit = credit;
    this.turn = turn;
    this.redFlag = redFlag;
    this.pocketedBalls = pocketedBalls;
    this.activeBalls = activeBalls;
    this.scoreBoard = scoreBoard;
  }
  addCredit(number) {
    this.credit += number;
  }
  purchaseGame() {
    if (this.credit >= 100) {
      this.credit -= 100;
      this.activeBalls.red.quantity += 15;
      this.activeBalls.yellow.quantity += 1;
      this.activeBalls.green.quantity += 1;
      this.activeBalls.brown.quantity += 1;
      this.activeBalls.blue.quantity += 1;
      this.activeBalls.pink.quantity += 1;
      this.activeBalls.black.quantity += 1;
      this.pocketedBalls.red.quantity -= 15;
      this.pocketedBalls.yellow.quantity -= 1;
      this.pocketedBalls.green.quantity -= 1;
      this.pocketedBalls.brown.quantity -= 1;
      this.pocketedBalls.blue.quantity -= 1;
      this.pocketedBalls.pink.quantity -= 1;
      this.pocketedBalls.black.quantity -= 1;
    } else {
      return "insufficient credit";
    }
  }

  potRedBall(hit) {
    if (this.activeBalls.red.quantity === 0) {
      //<--no red balls to pot
      this.turn = !this.turn;
      if (this.turn === true) {
        this.scoreBoard.player2 += 4;
        return "missed, no red balls to pot";
      } else if (this.turn === false) {
        this.scoreBoard.player1 += 4;
        return "missed, no red balls to pot";
      }
    }
    if (hit === true) {
      //<--potted

      this.activeBalls.red.quantity -= 1;
      this.redFlag = true;

      if (this.turn === true) {
        this.scoreBoard.player1 += 1;
      } else if (this.turn === false) {
        this.scoreBoard.player2 += 1;
      }
    } else if (hit === false) {
      //<--missed
      this.redFlag = false;
      this.turn = !this.turn;
    }
  }

  potColouredBall(hit, ball) {
    if (this.activeBalls.red.quantity <= 0 && hit === true) {
      //-- no red balls left on the table
      console.log(ball)
      console.log(this.activeBalls.green.quantity === 1);
      console.log(this.activeBalls.brown.quantity === 1);
      console.log(this.activeBalls.blue.quantity === 1);
      console.log(this.activeBalls.pink.quantity === 1);
      console.log(this.activeBalls.black.quantity === 1);
      
      
      

    }
    if (hit === true) {
      //<<--colouredBall is potted

      if (this.redFlag === false) {
        //<<-- redball NOT potted
        this.turn = !this.turn;
        if (this.turn === true) {
          //<--player 1
          this.scoreBoard.player2 += 4;
        } else if (this.turn === false) {
          //\\<--player 2
          this.scoreBoard.player1 += 4;
        }
        //<<-- redball POTTED
      } else if (this.redFlag === true) {
        if (ball === "black" && this.turn === true) {
          this.scoreBoard.player1 += 7;
        }
        if (ball === "black" && this.turn === false) {
          this.scoreBoard.player2 += 7;
        }
        if (ball === "pink" && this.turn === true) {
          this.scoreBoard.player1 += 6;
        }
        if (ball === "pink" && this.turn === false) {
          this.scoreBoard.player2 += 6;
        }
        if (ball === "blue" && this.turn === true) {
          this.scoreBoard.player1 += 5;
        }
        if (ball === "blue" && this.turn === false) {
          this.scoreBoard.player2 += 5;
        }
        if (ball === "brown" && this.turn === true) {
          this.scoreBoard.player1 += 4;
        }
        if (ball === "brown" && this.turn === false) {
          this.scoreBoard.player2 += 4;
        }
        if (ball === "green" && this.turn === true) {
          this.scoreBoard.player1 += 3;
        }
        if (ball === "green" && this.turn === false) {
          this.scoreBoard.player2 += 3;
        }
        if (ball === "yellow" && this.turn === true) {
          this.scoreBoard.player1 += 2;
        }
        if (ball === "yellow" && this.turn === false) {
          this.scoreBoard.player2 += 2;
        }
      }
    }
    if (hit === false) {
      //<-- missed the coloured ball
      this.turn = !this.turn;
    }
  }
}


//true === p1

module.exports = { SnookerTable };

// if ( //<--add yellow ball
//         ball === "yellow" &&
//         this.activeBalls.green.quantity === 1 &&
//         this.activeBalls.brown.quantity === 1 &&
//         this.activeBalls.blue.quantity === 1 &&
//         this.activeBalls.pink.quantity === 1 &&
//         this.activeBalls.black.quantity === 1
//       ) {
//         this.activeBalls[ball].quantity = 0;
//         if (this.turn === true) {
          
//           this.scoreBoard.player1 += 2;
//         } else if (this.turn === false) {
//           this.scoreBoard.player2 += 2;
//         }
//       } 
//       if( //<<-- add green ball
//         ball === "green" &&
//         this.activeBalls.yellow.quantity === 0 &&
//         this.activeBalls.brown.quantity === 1 &&
//         this.activeBalls.blue.quantity === 1 &&
//         this.activeBalls.pink.quantity === 1 &&
//         this.activeBalls.black.quantity === 1 
//        ) {
//         this.activeBalls[ball].quantity = 0;
//         if (this.turn === true) {
//           this.scoreBoard.player1 += 3;
//         } else if (this.turn === false) {
//           this.scoreBoard.player2 += 3;
//         }
//       }
//       if ( //<<--add brown ball
//         ball === "brown" &&
//         this.activeBalls.yellow.quantity === 0 &&
//         this.activeBalls.green.quantity === 0 &&
//         this.activeBalls.blue.quantity === 1 &&
//         this.activeBalls.pink.quantity === 1 &&
//         this.activeBalls.black.quantity === 1
//       ) {
//         this.activeBalls[ball].quantity = 0;
//         if (this.turn === true) {
//           this.scoreBoard.player1 += 4;
//         } else if (this.turn === false) {
//           this.scoreBoard.player2 += 4;
//         }
//       }
//       if ( //<<--add blue ball
//         ball === "blue" &&
//         this.activeBalls.yellow.quantity === 0 &&
//         this.activeBalls.green.quantity === 0 &&
//         this.activeBalls.brown.quantity === 0 &&
//         this.activeBalls.pink.quantity === 1 &&
//         this.activeBalls.black.quantity === 1
//       ) {
//         this.activeBalls[ball].quantity = 0;
//         if (this.turn === true) {
//           this.scoreBoard.player1 += 5;
//         } else if (this.turn === false) {
//           this.scoreBoard.player2 += 5;
//         }
//       }
//       if ( //<<--add pink ball
//         ball === "pink" &&
//         this.activeBalls.yellow.quantity === 0 &&
//         this.activeBalls.green.quantity === 0 &&
//         this.activeBalls.brown.quantity === 0 &&
//         this.activeBalls.blue.quantity === 0 &&
//         this.activeBalls.black.quantity === 1
//       ) {
//         this.activeBalls[ball].quantity = 0;
//         if (this.turn === true) {
//           this.scoreBoard.player1 += 6;
//         } else if (this.turn === false) {
//           this.scoreBoard.player2 += 6;
//         }
//       }
//       if ( //<<--add black ball
//         ball === "black" &&
//         this.activeBalls.yellow === 0 &&
//         this.activeBalls.green.quantity === 0 &&
//         this.activeBalls.brown.quantity === 0 &&
//         this.activeBalls.blue.quantity === 0 &&
//         this.activeBalls.pink.quantity === 0 
//       ) {
//         this.activeBalls[ball].quantity = 0;
//         if (this.turn === true) {
//           this.scoreBoard.player1 += 7;
//         } else if (this.turn === false) {
//           this.scoreBoard.player2 += 7;
//         }
//       } 
