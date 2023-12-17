const lateClock = (a, b, c, d) => {
    let output = "";
    let argArray = [a, b, c, d];

    const findFirst = (array) => {
        if(array.indexOf(2) >= 0 ){
            output += '2';
            argArray.splice(array.indexOf(2), 1)
        } else 
        if (array.indexOf(1) >= 0) {
            output += '1';
            argArray.splice(array.indexOf(1), 1)
        } else {
            output += '0';
            argArray.splice(array.indexOf(0), 1)
        }
    };

    const findSecond = (array) => {
        if(output === '2') {
            if(array.indexOf(3) >= 0) {
                output += '3';
                argArray.splice(array.indexOf(3), 1)
            } else 
            if(array.indexOf(2) >= 0) {
                output += '2';
                argArray.splice(array.indexOf(2), 1)
            } else
            if(array.indexOf(1) >= 0) {
                output += '1';
                argArray.splice(array.indexOf(1), 1)
            } else {
                output += '0';
                argArray.splice(array.indexOf(0), 1)
            }
        } else
        if(output === '1' || output === '0') {
            if(argArray.indexOf(9) >= 0) {
                output += '9';
                argArray.splice(array.indexOf(9), 1)
            } else 
            if(argArray.indexOf(8) >= 0) {
                output += '8';
                argArray.splice(array.indexOf(8), 1)
            } else
            if(argArray.indexOf(7) >= 0) {
                output += '7';
                argArray.splice(array.indexOf(7), 1);
            } else
            if(argArray.indexOf(6) >= 0) {
                output += '6';
                argArray.splice(array.indexOf(6), 1);
            } else
            if(argArray.indexOf(5) >= 0) {
                output += '5';
                argArray.splice(array.indexOf(5), 1);
            } else
            if(argArray.indexOf(4) >= 0) {
                output += '4';
                argArray.splice(array.indexOf(4), 1);
            } else 
            if(argArray.indexOf(3) >= 0) {
                output += '3';
                argArray.splice(array.indexOf(3), 1);
            } else 
            if(argArray.indexOf(2) >= 0) {
                output += '2';
                argArray.splice(array.indexOf(2), 1);
            } else 
            if(argArray.indexOf(1) >= 0) {
                output += '1';
                argArray.splice(array.indexOf(1), 1);
            } else {
                output += '0';
                argArray.splice(array.indexOf(0), 1);
            }
        }
    };

    const findThird = (array) => {
        if(array.indexOf(5) >= 0){
            output += ':5';
            argArray.splice(array.indexOf(5), 1);
        } else
        if(array.indexOf(4) >= 0){
            output += ':4';
            argArray.splice(array.indexOf(4), 1);
        } else
        if(array.indexOf(3) >= 0){
            output += ':3';
            argArray.splice(array.indexOf(3), 1);
        } else
        if(array.indexOf(2) >= 0) {
            output += ':2';
            argArray.splice(array.indexOf(2), 1);
        } else
        if(array.indexOf(1) >= 0) {
            output += ':1';
            argArray.splice(array.indexOf(1), 1);
        } else {
            output += ':0';
            argArray.splice(array.indexOf(0), 1);
        }
    };

    const findFourth = (array) => {
        output += array[0]
    };

    findFirst(argArray);
    findSecond(argArray);
    findThird(argArray);
    findFourth(argArray);

    return output;

};

module.exports = { lateClock };

//https://www.codewars.com/kata/58925dcb71f43f30cd00005f/train/python