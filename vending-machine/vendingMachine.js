class VendingMachine {
    constructor(items, money){

        items = [{ name:"Smarties", code:"A01", quantity: 10, price: 0.60},
        { name:"Caramac Bar", code:"A02", quantity: 5, price: 0.60},
        { name: 'Freddo', code: 'A04', quantity: 1, price: 0.25 },
        { name:"Cheese and Onion Crisps", code:"B06", quantity:0, price:0.67},
        { name: 'Irn Bru', code: 'C07', quantity: 3, price: 0.79 },
        { name: 'Refresher Chews', code: 'D02', quantity: 10, price: 4.27 },
        { name: 'Mini Love Hearts', code: 'D03', quantity: 10, price: 2.02 },
        { name: 'Popping Candy', code: 'D04', quantity: 10, price: 1.01 },
        { name: 'Drumstick Lollies', code: 'D05', quantity: 10, price: 5.12 },
        { name: 'Double Candy Lollies', code: 'D06',quantity: 10,price: 10},];
        money = 10.00;

        this.items = items;
        this.money = money;
    };

    vend(selection, itemMoney){
        let selectionIndex = 0;
        let validSelection = false;
        this.items.forEach((element, index) => {
            if(element['code'] === selection){
                selectionIndex = index;
                validSelection = true;
            };
        });

        const centify = (monies) => {
            let cash = monies.toString();
            if(cash.search(/[.]/g) > 0){
                if(cash.slice(cash.search(/[.]/g), cash.length).length > 3){
                    cash = Math.round(Number(cash) * 100) / 100;
                    cash = cash.toString();
                };
                if(cash.slice(cash.search(/[.]/g), cash.length).length === 2){
                    cash += '0';
                };
            }
            else {
                cash += '.00';
            };
            return cash;
        };

        if(!validSelection){
            let formattedCash = centify(this.money);
            return `Invalid selection! : Money in vending machine = ${formattedCash}`;
        };

        if(this.items[selectionIndex]['price'] > itemMoney){
            return "Not enough money!";
        };
        
        if(this.items[selectionIndex]['quantity'] <= 0){
            return `${this.items[selectionIndex]['name']}: Out of stock!`;
        };

        if(this.items[selectionIndex]['price'] === itemMoney){
            this.money += itemMoney;
            this.items[selectionIndex]['quantity'] -= 1;
            return `Vending ${this.items[selectionIndex]['name']}`;
        };

        if(this.items[selectionIndex]['price'] < itemMoney){
            this.money += this.items[selectionIndex]['price'];
            this.items[selectionIndex]['quantity'] -= 1;
            let formattedCash = centify(itemMoney - this.items[selectionIndex]['price']);
            return `Vending ${this.items[selectionIndex]['name']} with ${formattedCash} change.`;
        };
    };
};

module.exports = { VendingMachine };


//https://www.codewars.com/kata/586e6d4cb98de09e3800014f/train/javascript
