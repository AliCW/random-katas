const deadfish = (string) => {
    let digit = 0
    const output = []
    string.split('').forEach((element) => {
        if(element === 'i') digit += 1;
        if(element === 'd') digit -= 1;
        if(element === 's') digit *= digit;
        if(element === 'o') output.push(digit);
    });

    return output;
};

module.exports = { deadfish };

//https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/javascript