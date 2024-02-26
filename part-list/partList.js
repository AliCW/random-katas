const partList = (arr) => {

    const array = [...arr];
    const output = [];

    for(let i = 0; i < array.length - 1; i++) {
        const input = [];
        const add = array.slice(0, i + 1).join(' ')
        const extra = array.slice(i + 1, array.length).join(' ');
        
        input.push(add, extra);
        output.push(input);
    };
 
    return output;

};

module.exports = { partList };

//https://www.codewars.com/kata/56f3a1e899b386da78000732/train/javascript