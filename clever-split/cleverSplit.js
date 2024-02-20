const cleverSplit = (s) => {

    const output = [];
    const split = s.split(' ');
    
    for(let i = 0; i < split.length; i++) {
        let value = '';
        if(split[i].charAt(0) === '[') {
            for(let j = i; j < split.length; j++) {
                value += split[j] + ' ';
                i++;
                if(split[j].charAt(split[j].length - 1) === ']') {
                    value = value.trim();
                    i--;
                    break;
                };
            };
        };
        if(value.length === 0) {
            value += split[i];
        };
        output.push(value);
    };

    return output;

};

module.exports = { cleverSplit };

//https://www.codewars.com/kata/5992e11d6ca73b38d50000f0/train/javascript