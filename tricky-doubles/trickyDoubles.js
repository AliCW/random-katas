const trickyDoubles = (number) => {
    const string = number.toString();
    if(string.slice(0, string.length / 2) === string.slice(string.length / 2, string.length)){
        return number;
    };
    return number * 2;
};

module.exports = { trickyDoubles };

//https://www.codewars.com/kata/56971747aa359bdbf800004d/train/javascript