const { SnookerTable } = require('../OOP-testing');

describe('OOP Snooker Table - starting tests', () => {
    test('Vending machine should have a starting credit of 0', () => {
        const test = new SnookerTable();
        expect(test.credit).toBe(0);
    });
    test('SnookerTable should have start with no active balls and a full set of pocketed balls', () => {
        const test = new SnookerTable();
        expect(test.activeBalls.red.quantity).toBe(0);
        expect(test.activeBalls.yellow.quantity).toBe(0);
        expect(test.activeBalls.green.quantity).toBe(0);
        expect(test.activeBalls.brown.quantity).toBe(0);
        expect(test.activeBalls.blue.quantity).toBe(0);
        expect(test.activeBalls.pink.quantity).toBe(0);
        expect(test.activeBalls.black.quantity).toBe(0);
        expect(test.pocketedBalls.red.quantity).toBe(15);
        expect(test.pocketedBalls.yellow.quantity).toBe(1);
        expect(test.pocketedBalls.green.quantity).toBe(1);
        expect(test.pocketedBalls.brown.quantity).toBe(1);
        expect(test.pocketedBalls.blue.quantity).toBe(1);
        expect(test.pocketedBalls.pink.quantity).toBe(1);
        expect(test.pocketedBalls.black.quantity).toBe(1);
    });
    test('SnookerTable scoreboard starts as player 1 & player 2 with a score of 0', () => {
        const test = new SnookerTable();
        expect(test.scoreBoard.player1).toBe(0);
        expect(test.scoreBoard.player2).toBe(0);
    })
})


describe('SnookerTable adding credit & purchasing a game', () => {
    test('SnookerTable addCredit method should add credit to the class', () => {
        const test = new SnookerTable();
        test.addCredit(100);
        expect(test.credit).toBe(100);
    });
    test('SnookerTable addCredit method should update credit to the class from multiple invocations', () => {
        const test = new SnookerTable();
        test.addCredit(100);
        test.addCredit(40);
        test.addCredit(20);
        expect(test.credit).toBe(160);
    });
    test('SnookerTable purchaseGame method should reduce the current credit by 100', () => {
        const test = new SnookerTable();
        test.addCredit(130);
        test.purchaseGame();
        expect(test.credit).toBe(30)
    })
    test('SnookerTable purchaseGame method should add all Snooker colours into activeBalls to be potted if enough credit (100) is added', () => {
        const test = new SnookerTable();
        test.addCredit(100);
        test.purchaseGame();
        expect(test.activeBalls).toEqual({
            red: {quantity: 15},
            yellow: {quantity: 1},
            green: {quantity: 1},
            brown: {quantity: 1},
            blue: {quantity: 1},
            pink: {quantity: 1},
            black: {quantity: 1},
        });
    });
    test('SnookerTable purchaseGame method should reduce the current credit by 100 (price of a game)', () => {
        const test = new SnookerTable();
        test.addCredit(100);
        test.purchaseGame();
        expect(test.credit).toBe(0);
    });
    test('SnookerTable purchaseGame should return an error message if there is insufficient credit', () => {
        const test = new SnookerTable();
        test.addCredit(60);
        expect(test.purchaseGame()).toBe('insufficient credit');
    });
    test('SnookerTable purchaseGame removes all balls from pocketedBalls', () => {
        const test = new SnookerTable();
        test.addCredit(140);
        test.purchaseGame();
        expect(test.pocketedBalls).toEqual({
            red: {quantity: 0},
            yellow: {quantity: 0},
            green: {quantity: 0},
            brown: {quantity: 0},
            blue: {quantity: 0},
            pink: {quantity: 0},
            black: {quantity: 0},
        });
    });
});

describe('SnookerTable potting balls, adding score & recording turns (player 1 moves when true)', () => {
    test('SnookerTable potRedBall method removes the potted ball from "active" and adds it to "pocketed" - red', () => {
        const test = new SnookerTable();
        const pot = true;
        test.addCredit(120);
        test.purchaseGame();
        test.potRedBall(pot);
        expect(test.activeBalls.red.quantity).toBe(14);
    });
    test('SnookerTable potRedBall(true) triggers the "redCheck" flag to be true - potted ball', () => {
        const test = new SnookerTable();
        const pot = true;
        test.addCredit(100);
        test.purchaseGame();
        test.potRedBall(pot)
        expect(test.redFlag).toBe(true);
    });
    test('SnookerTable potRedBall(false) triggers the "redCheck" flag to be false & switches players turns', () => {
        const test = new SnookerTable();
        const miss = false;
        test.addCredit(100);
        test.purchaseGame();
        test.potRedBall(miss);
        expect(test.redFlag).toBe(false);
        expect(test.turn).toBe(false);
    });
    test('SnookerTable potRedBall adds one to the scoreboard, red ball potted, missed then potted (player 1 & 2 test)', () => {
        const test = new SnookerTable();
        const pot = true;
        const miss = false;
        test.addCredit(100);
        test.purchaseGame();
        test.potRedBall(pot);
        test.potRedBall(miss);
        test.potRedBall(pot);
        expect(test.scoreBoard.player1).toBe(1)
        expect(test.scoreBoard.player2).toBe(1);
    });
    test('SnookerTable potRedBall returns a foul when all red balls have been potted', () => {
        const test = new SnookerTable();
        const pot = true;
        test.addCredit(100);
        test.purchaseGame();
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        expect(test.potRedBall(pot)).toBe('missed, no red balls to pot')
        expect(test.potRedBall(pot)).toBe('missed, no red balls to pot')
        expect(test.scoreBoard.player1).toBe(19)
        expect(test.scoreBoard.player2).toBe(4);
    });
    test('SnookerTable potColouredBall method returns a foul if potted when redFlag is false & changes the player turn', () => {
        const test = new SnookerTable();
        const pot = true;
        test.addCredit(100);
        test.purchaseGame();
        test.potColouredBall(pot);
        expect(test.turn).toBe(false);
        test.potColouredBall(pot);
        expect(test.turn).toBe(true);
        expect(test.scoreBoard.player1).toBe(4);
        expect(test.scoreBoard.player2).toBe(4);
    });
    test('SnookerTable potColouredBall method returns 6 points when the pink is potted - player1 test', () => {
        const test = new SnookerTable();
        const pot = true;
        const ball = 'pink';
        test.addCredit(100);
        test.purchaseGame();
        test.potRedBall(pot);
        test.potColouredBall(pot, ball);
        expect(test.scoreBoard.player1).toBe(7);
        expect(test.scoreBoard.player2).toBe(0);
    });
    test('SnookerTable potColouredBall method returns 6 points when the pink is potted - player2 test', () => {
        const test = new SnookerTable();
        const pot = true;
        const miss = false;
        const ball = 'pink';
        test.addCredit(100);
        test.purchaseGame();
        test.potRedBall(miss);
        test.potRedBall(pot);
        test.potColouredBall(pot, ball);
        expect(test.scoreBoard.player1).toBe(0)
        expect(test.scoreBoard.player2).toBe(7)
    });
    test('SnookerTable potColouredBall method does not add any to score when missed, player 1 & player 2 test', () => {
        const test = new SnookerTable();
        const pot = true;
        const miss = false;
        const ball = 'black';
        test.addCredit(100);
        test.purchaseGame();
        test.potRedBall(pot);
        test.potColouredBall(miss, ball);
        expect(test.scoreBoard.player1).toBe(1);
        expect(test.turn).toBe(false);
    });
    test('SnookerTable potColouredBall method removes the coloured ball from the activeBalls object when all redballs have been potted', () => {
        const test = new SnookerTable();
        const pot = true;
        const ball = 'yellow';
        test.addCredit(100);
        test.purchaseGame();
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potColouredBall(pot, ball);
        test.potColouredBall(pot, ball);
        expect(test.activeBalls.yellow.quantity).toBe(0)
    });
    test('SnookerTable potColouredBall method returns a foul when the colours are not potted in ascending order when no reds are present', () => {
        const test = new SnookerTable();
        const pot = true;
        const black = 'black';
        const yellow = 'yellow';
        test.addCredit(100);
        test.purchaseGame();
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potRedBall(pot);
        test.potColouredBall(pot, black);
        // console.log(yellow === 'yellow')
        // console.log(test.activeBalls.green.quantity === 1);
        // console.log(test.activeBalls.brown.quantity === 1);
        // console.log(test.activeBalls.blue.quantity === 1);
        // console.log(test.activeBalls.pink.quantity === 1);
        // console.log(test.activeBalls.black.quantity === 1);
        expect(test.potColouredBall(pot, yellow)).toBe('Player 1 foul')
    });
});