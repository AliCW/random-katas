const englishBeggars = (values, beggars) => {
    if (beggars === 0) return [];

    const output = [];
    for(let i = 0; i < beggars; i++){
        output.push(0);
    };

    let count = 0;
    for(let j = 0; j < values.length; j++){
        output[count] += values[j];
        count++;
        if(count === beggars) count = 0;
    };
    
    return output;
};

module.exports = { englishBeggars };


// https://www.codewars.com/kata/59590976838112bfea0000fa/train/javascript