const splitString = (str) => {
    if (str.length === 0) return [];

    const splitString = str.split("");
    const output = [];
    
    splitString.forEach((char, index) => {
        if(index % 2 === 0) {
            output.push(char + str.charAt(index + 1));
        }
    });

    if(str.length % 2 === 0) {
        return output;
    } else {
        output[output.length - 1] += "_";
        return output;
    }
};

//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

module.exports = { splitString };