const duplicateCount = (string) => {
    const dict = {};
    const split = string.toLowerCase().split('');
    
    split.forEach((element) => {
        if(dict[element] === undefined) dict[element] = 1;
        else dict[element]++;
    });
    
    let output = 0;
    for(let key in dict){
        if(dict[key] > 1) {
            output++;
        };
    };

    return output;
};

module.exports = { duplicateCount };

//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
