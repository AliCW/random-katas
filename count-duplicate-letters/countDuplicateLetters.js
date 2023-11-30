const duplicateCount = (text) => {
    let dict = {};
    let lowerString = text.toLowerCase();
    let splitString = lowerString.split("");
    let returnValue = 0;

    splitString.forEach((element) => {
        dict[element] = 0;
    });
    
    for (let i = 0; i < splitString.length; i++) {
        dict[splitString[i]] += 1;
    };
    
    for(let key in dict) {
        if(dict[key] > 1) {
            returnValue += 1;
        };
    };

    return returnValue;
};

module.exports = { duplicateCount };

//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript