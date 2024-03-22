const calculateString = (str) => {

    let left = [];
    let right = [];
    let split = [];
    let symbol = "";

    if(str.search(/[\*]/g) > 0) {
        symbol = "*";
        split = str.split("*");
    };
    if(str.search(/[\-]/g) > 0) {
        symbol = "-";
        split = str.split("-");
    };
    if(str.search(/[\+]/g) > 0) {
        symbol = "+";
        split = str.split("+");
    };
    if(str.search(/[\/]/g) > 0) {
        symbol = "/";
        split = str.split("/");
    };
    
    split[0].split("").forEach((element) => {
        if(/[0-9\.]/g.test(element)) {
            left.push(element);
        };
    });
    split[1].split("").forEach((element) => {
        if(/[0-9\.]/g.test(element)) {
            right.push(element);
        };
    });
    
    if(left[left.length - 1] === ".") {
        left.splice(left.length - 1, 1);
    };
    if(right[right.length - 1] === ".") {
        right.splice(right.length - 1, 1);
    };

    if(symbol === "*") return Math.round(Number(left.join("")) * Number(right.join(""))).toString();
    if(symbol === "-") return Math.round(Number(left.join("")) - Number(right.join(""))).toString();
    if(symbol === "+") return Math.round(Number(left.join("")) + Number(right.join(""))).toString();
    if(symbol === "/") return Math.round(Number(left.join("")) / Number(right.join(""))).toString();

};

module.exports = { calculateString };

//https://www.codewars.com/kata/56b5dc75d362eac53d000bc8/train/javascript
