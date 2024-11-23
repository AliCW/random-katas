const formatTextInput = (old, updated, string) => {
    if(/[0-9]/g.test(string)) return updated;
    if(updated[0] === "-" && updated[1] == "-") return old;
    if(updated[0] === "." && updated[1] == ".") return old;

    const split = updated.split(/[?=+ ?=* ?=/]/g)

    // console.log(split);

    for(let i = 0; i < split.length; i++){
        let countDecimal = 0;
        let countMinus = 0;

        for(let j = 0; j < split[i].length; j++){
            
            if(split[i][j] === ".") countDecimal++;
            if(split[i][j] === "-") countMinus++;
            if(countDecimal >= 2 || countMinus >= 2) return old;
        };
    };

    return updated;
};

module.exports = { formatTextInput };