const repeatAdjacent = (s) => {

    if(s.length < 5) return 0;

    let count = 0;
    let last = "";
    const check = [];

    for(let i = 0; i < s.length; i++) {
        let current = s[i];
        if(s[i] === s[i + 1] && current !== last) {
            last = s[i];
            check.push(s[i] + s[i + 1]);
        } else {
        if(s[i] !== s[i + 1] && current !== last) {
            last = s[i];
            check.push(s[i]);
        };  
    }};

    for(let j = 0; j < check.length - 1; j++) {
        if(check[j].length === 2 && check[j + 1].length == 2) {
            count++;   
            for(let k = j; k < check.length - 1; k++) {
                if(check[k].length === 2 && check[k + 1].length === 2) {
                    j++;
                } else {
                    break;
                };
            };
        };
    };

    return count;

};

module.exports = { repeatAdjacent };