const hammingDistance = (string1, string2) => {
    let output = 0;

    for(let i = 0; i < string1.length; i++) {
        if(string1[i] !== string2[i]) output++;
    };

    return output;
};

module.exports = { hammingDistance };


//https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69