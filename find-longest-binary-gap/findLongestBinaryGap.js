const gap = (number) => {
    const binary = (number >>> 0).toString(2).split('');
    const output = [];

    for(let i = 0; i < binary.length; i++){
        let count = 0;
        if(binary[i] === '0') {
            count++;
            for(let j = i; j < binary.length; j++){
                if(binary[j] === '0') {
                    i++;
                    count++;
                } else {
                    output.push(count);
                    break;
                };
            };
        };
    };

    if(output.length === 0) return 0;
    return Math.max(...output) - 1;
};

module.exports = { gap }; 