const high = (string) => {
    const alpha = ' abcdefghijklmnopqrstuvwxyz';
    const values = string.split(' ');

    const vals = values.map((element) => {
        let val = 0;
        element.split('').forEach((letter) => {
            val += alpha.indexOf(letter);
        });
        return val;
    });

    return values[vals.indexOf(Math.max(... vals))];
};

module.exports = { high };


//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript