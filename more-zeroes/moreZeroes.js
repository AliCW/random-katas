const moreZeroes = (string) => {

    const binaries = [];
    const indices = [];
    string.split('').forEach((letter) => {
        binaries.push(letter.charCodeAt(0).toString(2));
    });

    for(let i = 0; i < binaries.length; i++) {
        let zeroes = 0;
        let ones = 0;
        binaries[i].split('').forEach((number) => {
            if(Number(number) === 0) {
                zeroes++;
            } else {
                ones++;
            };
        });
        if(zeroes > ones) indices.push(i);
        else indices.push("");
    };

    const output = [];
    const splitString = string.split('');

    for(let j = 0; j < string.length; j++) {
        if(output.includes(splitString[j])) continue;
        if(indices.includes(j) === true) output.push(splitString[j]);
    };

    return output;
};

module.exports = { moreZeroes };


//https://www.codewars.com/kata/5d41e16d8bad42002208fe1a/train/javascript