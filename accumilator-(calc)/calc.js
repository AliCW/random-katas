const calc = (string) => {
    const split = string.split(/([?=+ ?=* ?=/ ?=-])/g);

    const output = split.reduce((acc, curr, index) => {
        let newCurr = Number(split[index + 1]);
        acc = Number(acc);

        if(curr === "+") return acc + newCurr;
        else if(curr === "-") return acc - newCurr; 
        else if(curr === "*") return acc * newCurr;
        else if(curr === "/") return acc / newCurr;
        
        return acc;
    });

    return output;
};

module.exports = { calc };
