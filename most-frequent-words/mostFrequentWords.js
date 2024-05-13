const topThreeWords = (string) => { //not very dry
    let dict = {};
    let format = string.toLowerCase().split('').filter((element, index) => {
        if(element === "'") if(/[A-Za-z]/.test(element[index - 1]) || /[A-Za-z]/.test(element[index + 1])) return element;  
        if(element === " ") return element;
        return element.match(/[a-zA-Z]/g);
    });

    format.join('').split(' ').forEach((element) => {
        if (element !== '') {
            if (dict[element] === undefined) dict[element] = 1;
            else { dict[element] += 1 };
        };
    });

    let singleValues = [];
    for(let key in dict){ if(dict[key] === 1) singleValues.push(key); };
    singleValues = singleValues.sort((a, b) => a.length - b.length);
     
    let keys = Object.keys(dict).filter((element) => { if(/[A-Za-z]/.test(element)) return element})
    if(keys.length === 0) return [];

    if(Math.max(... Object.values(dict)) === 1){
        if(keys.length === 3) return [singleValues[0], singleValues[1], singleValues[2]];
        if(keys.length === 2) return [singleValues[0], singleValues[1]];
        if(keys.length === 1) return [singleValues[0]];
    };

    first = Object.keys(dict).reduce((acc, curr) => {
        if(dict[acc] > dict[curr]) return acc;
         else { return curr; };
    });
    
    if(Math.max(... Object.values(dict)) === 1){
        if(keys.length !== 2) return [first, singleValues[0], singleValues[1]];
        if(keys.length === 1) return [first];
    };
    delete dict[first];

    second = Object.keys(dict).reduce((acc, curr) => {
        if(dict[acc] > dict[curr]) return acc;
        else { return curr; };
    });

    if(Math.max(... Object.values(dict)) === 1){
        if(keys.length === 2) {
            return [first, second];
        } else { return [first, second, singleValues[0]];};
    };

    delete dict[second];
    third = Object.keys(dict).reduce((acc, curr) => {
        if(dict[acc] > dict[curr]) return acc;
        else { return curr;};
    });

    return [first, second, third];
};

module.exports = { topThreeWords };

//https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript