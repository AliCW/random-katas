const count = (string) => {

    const output = {};

    string.split('').forEach((element) => {
        if(output[element] === undefined) {
            output[element] = 1;
        } else {
            output[element] += 1;
        };
    });

    return output;

};

module.exports = { count };


//https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript