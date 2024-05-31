const persistence = (number) => {
    if(number < 9) return 0;
  
    let count = 0;
    let multiply = number;
    do {
        count++;
        multiply = multiply.toString().split('');
        multiply = multiply.reduce((acc, curr) => {
            return acc * curr;
        });
    } while (multiply > 9);

    return count; 
};

module.exports = { persistence };

//https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript