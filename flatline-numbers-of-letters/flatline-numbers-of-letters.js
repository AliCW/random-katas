function numbersOfLetters(integer) {
    let numberArray = [];
    const map = { //map out words for number lengths to correct keys
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "onezero",
        11: "oneone",
        12: "onetwo",
        13: "onethree",
        14: "onefour",
        15: "onefive",
        16: "onesix",
    };
    function writeFirstNumber(array) { //adds the first number into the array
        array.forEach((number) => {
            for(let key in map) {
                if (key === number) {
                    numberArray.push(map[key]); 
                };
            };
        });
    };
    function writeNumber(number) { //adds the length number as a word to the number array
        for(let key in map) {
            if (key == number) {
                numberArray.push(map[key]);               
            };
        };
    };
    const number = integer.toString(); //convert initial number to string
    const splitNumber = number.split(''); //split the string to be input as an array for the first number
    writeFirstNumber(splitNumber);
    numberArray = numberArray.join('').split(' ');//join the first number string together then split as one word in an array
    for(let i = 0; i < numberArray.length; i++) { //loop through this array, initial length is always one
        writeNumber(numberArray[i].length); //write the next number in words
        if(numberArray[i].length === numberArray[i + 1].length) { //check if length matches
            if (numberArray[i] === numberArray[i + 1]) { 
                return [numberArray[0]]; //if length matches & they are the same number, just return a single number in an array as they initiall match
            } else { 
                return numberArray; //if not, return the whole array
            };
        };
    };
};

module.exports = { numbersOfLetters };

//https://www.codewars.com/kata/599febdc3f64cd21d8000117/train/javascript

