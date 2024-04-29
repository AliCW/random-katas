const moreZeroes = (string) => {

    const binaries = [];
    string.split('').forEach((letter) => {
        binaries.push(letter.charCodeAt(0).toString(2));
    });
    
    const indices = [];
    binaries.forEach((element, index) => {
        let zeroes = 0;
        for(let i = 0; i < element.length; i++) {
            if(Number(element[i]) === 0) zeroes++;
            if(zeroes >= 4) {
                indices.push(index);
                break;
            };
        };
    });

    const output = [];
    for(let j = 0; j < string.length; j++) {
        if(output.includes(string.charAt(j))) continue;
        if(indices.includes(j) === true) output.push(string.charAt(j));
    };

    return output;
};

module.exports = { moreZeroes };


//https://www.codewars.com/kata/5d41e16d8bad42002208fe1a/train/javascript