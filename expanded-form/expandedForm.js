const expandedForm = (number) => {
    const toString = number.toString();
    let output = '';
    for(let i = 0; i < toString.length - 1; i++) {
        if(toString[i] !== '0'){
            let length = toString.length - 1 - i;
            if(length > 1){
                output += toString[i] + '0'.repeat(length) + ' + ';
            } else {
                output += toString[i] + '0'  + ' + ';
            };
        };
    };

    if(toString[toString.length - 1] === '0'){
        return output.slice(0, output.length - 3);
    } else {
        return output + toString[toString.length - 1];
    };
};

module.exports = { expandedForm };

//https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript
