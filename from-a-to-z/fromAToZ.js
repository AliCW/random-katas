const gimmieTheLetters = (string) => {

    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    const start = alpha.indexOf(string.toLowerCase().charAt(0));
    const end = alpha.indexOf(string.toLowerCase().charAt(2)) + 1;

    if(string.charAt(0).toUpperCase() === string.charAt(0)) return alpha.slice(start, end).toUpperCase();
    return alpha.slice(start, end);

};

module.exports = { gimmieTheLetters };


//https://www.codewars.com/kata/6512b3775bf8500baea77663/train/javascript