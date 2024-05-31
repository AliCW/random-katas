const calc = (string, cypher) => {
    return string.split('').map((element) => {
        if(element === cypher[0]) return cypher[1];
        if(element === cypher[0].toUpperCase()) return cypher[1].toUpperCase();
        if(element === cypher[1]) return cypher[0];
        if(element === cypher[1].toUpperCase()) return cypher[0].toUpperCase();
        if(element === cypher[2]) return cypher[3];
        if(element === cypher[2].toUpperCase()) return cypher[3].toUpperCase();
        if(element === cypher[3]) return cypher[2];
        if(element === cypher[3].toUpperCase()) return cypher[2].toUpperCase();
        if(element === cypher[4]) return cypher[5];
        if(element === cypher[4].toUpperCase()) return cypher[5].toUpperCase();
        if(element === cypher[5]) return cypher[4];
        if(element === cypher[5].toUpperCase()) return cypher[4].toUpperCase();
        if(element === cypher[6]) return cypher[7];
        if(element === cypher[6].toUpperCase()) return cypher[7].toUpperCase();
        if(element === cypher[7]) return cypher[6];
        if(element === cypher[7].toUpperCase()) return cypher[6].toUpperCase();
        if(element === cypher[8]) return cypher[9];
        if(element === cypher[8].toUpperCase()) return cypher[9].toUpperCase();
        if(element === cypher[9]) return cypher[8];
        if(element === cypher[9].toUpperCase()) return cypher[8].toUpperCase();
        if(element === cypher[10]) return cypher[11];
        if(element === cypher[10].toUpperCase()) return cypher[11].toUpperCase();
        if(element === cypher[11]) return cypher[10];
        if(element === cypher[11].toUpperCase()) return cypher[10].toUpperCase();
        else return element;
    }).join('');
};

const encode = (string, cypher) => { return calc(string, cypher); };
const decode = (string, cypher) => { return calc(string, cypher); };

module.exports = { encode, decode };

//https://www.codewars.com/kata/592b7b16281da94068000107/train/javascript