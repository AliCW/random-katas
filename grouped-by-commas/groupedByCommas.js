const groupByCommas = (number) => {
    const string = number.toString();
    if(string.length <= 3) return string;
    
    const split = string.split('').reverse();
    let count = 1;
    split.forEach((element, index) => {
        if(index === 3){
            split.splice(index, 0, ',');
        }
        else if(index % 3 === 0 && index !== 0){
            split.splice(index + count, 0, ',');
            count++;
        };
    });
    
    return split.reverse().join('');
};

module.exports = { groupByCommas };

//https://www.codewars.com/kata/5274e122fc75c0943d000148/train/javascript