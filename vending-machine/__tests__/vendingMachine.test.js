const { VendingMachine } = require('../vendingMachine');

describe('OOP vending machine', () => {
    test('Given "machine.vend("A01",0.60)", return "Vending Smarties"', () => {
        const test = new VendingMachine();
        expect(test.vend("A01", 0.60)).toBe('Vending Smarties');
        expect(test.money).toBe(10.60);
        expect(test.items[0].quantity).toBe(9);
    });
    test('Given "machine.vend("A01",10.0), return "Vending Smarties with 9.40 change."', () => {
        const test = new VendingMachine();
        expect(test.vend("A01", 10.0)).toBe('Vending Smarties with 9.40 change.');
        expect(test.money).toBe(10.60);
        expect(test.items[0].quantity).toBe(9);
    });
    test('Given ""Z01",0.41", return "Invalid selection! : Money in vending machine = 11.20"', () => {
        const test = new VendingMachine();
        test.money = 11.20
        expect(test.vend("Z01", 0.41)).toBe('Invalid selection! : Money in vending machine = 11.20');
    });
    test('Given ""A02",0.40", return "Not enough money!"', () => {
        const test = new VendingMachine();
        expect(test.vend("A02",0.40)).toBe('Not enough money!');
        expect(test.money).toBe(10.00);
        expect(test.items[1].quantity).toBe(5);
    });
    test('Given ""B06",4.60", return "Cheese and Onion Crisps: Out of stock!"', () => {
        const test = new VendingMachine();
        expect(test.vend("B06",4.60)).toBe('Cheese and Onion Crisps: Out of stock!')
        expect(test.money).toBe(10.00);
        expect(test.items[3].quantity).toBe(0);
    });
    test('Given ""D05", 7.12", return "Vending Drumstick Lollies with 2.00 change."', () => {
        const test = new VendingMachine();
        expect(test.vend("D05", 7.12)).toBe('Vending Drumstick Lollies with 2.00 change.')
    })
    test('Given ""A04", 7.69", return "Vending Freddo with 7.44 change."', () => {
        const test = new VendingMachine();
        expect(test.vend("A04", 7.69)).toBe('Vending Freddo with 7.44 change.')
    })
    test('Given ""C07", 8.85", return "Vending Irn Bru with 8.06 change."', () => {
        const test = new VendingMachine();
        expect(test.vend("C07", 8.85)).toBe('Vending Irn Bru with 8.06 change.')
    })
    test('Given ""D06", 12.10", return "Vending Double Candy Lollies with 2.10 change."', () => {
        const test = new VendingMachine();
        test.money = 10.75
        expect(test.vend("D06", 12.10)).toBe('Vending Double Candy Lollies with 2.10 change.')
    })
    test('Given ""B10", 3.45", return "Invalid selection! : Money in vending machine = 11.39"', () => {
        const test = new VendingMachine();
        test.money = 11.39
        expect(test.vend("B10", 3.45)).toBe('Invalid selection! : Money in vending machine = 11.39');
    });
});

//https://www.codewars.com/kata/586e6d4cb98de09e3800014f/train/javascript