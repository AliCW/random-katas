const vowelIndices = (string) => {
    const output = [];
    const vowels = "AEIOUY";

    string.split("").forEach((element, index) => {
        if(vowels.includes(element.toUpperCase())){
            output.push(index + 1);
        };
    });

    return output;
};

module.exports = { vowelIndices };


//https://www.codewars.com/kata/5680781b6b7c2be860000036/train/javascript