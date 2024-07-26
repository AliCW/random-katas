const findMaxDivisors = (a, b) => {
    if(b - a === 0) return a;
    if(b - a === 1){
        if(a % 2 === 0 === true) return a;
        if(b % 2 === 0 === true) return b;
    };

    let start = a
    let end = b;
    if(a % 2 === 0 === false) start += 1;
    if(b % 2 === 0 === false) end -= 1;
    
    let factors = 0;
    const divisors = {};
    for(let i = start; i < end; i++){
        for(let j = 1; j <= Math.sqrt(i); j++){
            if(i % j === 0) factors++;
            if(j !== i / j) factors++;
        };
        Object.assign(divisors, {[i]: factors});
        factors = 0;
    };

    const output = [];
    const maxDivisors = Math.max(... Object.values(divisors));
    for(let key in divisors){
        if(divisors[key] === maxDivisors){
            output.push(start);
        };
        start++;
    };
    console.log(divisors, output)
    return output.sort((a, b) => {
        return a - b;
    })[0];

};

module.exports = { findMaxDivisors };

