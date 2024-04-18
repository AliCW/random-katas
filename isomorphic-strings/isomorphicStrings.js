const isomorph = (a, b) => {

    if(a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] === a[j] && b[i] !== b[j]) return false;
            if (a[i] !== a[j] && b[i] === b[j]) return false;
        };
    };
    return true;
};


module.exports = { isomorph };

//create a double loop
//if first & second letter of string 1 are equal & they are different from string 2, return false
//repeat if condition for string 2 & string 1 comparison

//when the loop is finished, return true

//https://www.codewars.com/kata/59dbab4d7997cb350000007f/train/javascript