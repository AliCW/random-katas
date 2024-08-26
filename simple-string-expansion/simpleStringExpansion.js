const stringExpansion = (s) => {

    let output = '';

    if(s.search(/[0-9]/g) === -1) return s;

    for(let k = 0; k < s.length; k++) {
        if(/[0-9]/g.test(Number(s[k])) === false) {
            output += s[k];
        } else {
            break;
        };
    };

    for(let i = 0; i < s.length; i++) {
        if(/[0-9]/g.test(Number(s[i])) === true) {
            for(let j = i + 1; j < s.length; j++) {
                if(s[j] === undefined) break;
                if(/[0-9]/g.test(Number(s[j])) === true) break;
                let append = s[j].repeat(s[i]);
                output += append;
            };
        };
    };
    
    return output;

};

module.exports = { stringExpansion };

//https://www.codewars.com/kata/5ae326342f8cbc72220000d2/javascript