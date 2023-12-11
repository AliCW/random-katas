const arrayDiff = (a, b) => {
    if(a.length === 0) return [];
    if(b.length === 0) return a;

    const sortA = [...a]
    const sortB = [...b]
    const output = [];

    for(let i = 0; i < sortA.length; i++) {
        if(sortB.indexOf(sortA[i]) === -1) {
            output.push(sortA[i])
        };
    };

    return output;
};

// const arrayDiff= (a, b) => {
//     return a.filter(e => !b.includes(e));
//   }

module.exports = { arrayDiff };

//https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript