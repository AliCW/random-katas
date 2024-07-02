const almostEven = (total, parts) => {
    if (parts === 1) return [total];
    if (parts === total) return [1, 1];

    const output = [];
    if (total / parts === Math.floor(total / parts) === true) {
        for(let i = 0; i < parts; i++){ output.push(total / parts); };
        return output;
    };

    let remainder = total % parts;
    for(let j = 0; j < parts; j++){
        if(remainder > 0) {
            output.push(Math.floor(total / parts) + 1);
            remainder--;
        } else { output.push(Math.floor(total / parts)); };
    };

    return output.reverse();

};

module.exports = { almostEven };

//https://www.codewars.com/kata/529e2e1f16cb0fcccb000a6b/train/javascript

