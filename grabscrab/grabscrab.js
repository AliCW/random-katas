const grabscrab = (string, dict) => {
    const alphabetise = (str) => {
        return str.split('').sort((a, b) => {
            return a.localeCompare(b);
        });
    };

    const sort = alphabetise(string);
    const output = [];
    dict.forEach((element) => {
        const check = alphabetise(element);
        if(check.join('') === sort.join('')){
            output.push(element);
        };
    });

    return output;
};

module.exports = { grabscrab };

//https://www.codewars.com/kata/52b305bec65ea40fe90007a7/train/javascript


