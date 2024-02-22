const sequenceClassifier = (arr) => {

    let add = false;
    let dec = false;
    let copy = [...arr];
    let sort = [...arr];

    sort.sort((a, b) => {
        return a - b;
    });

    if (sort[0] === sort[sort.length - 1]) return 5;

    for(let i = 0; i < copy.length - 1; i++){
        if(copy[i] > copy[i + 1]) {
            dec = true;
        } else
        if(copy[i] < copy[i + 1]) {
            add = true;
        };
        if(add && dec === true) break;
    };

    if(dec && add === true) return 0;

    const duplicate = (array) => {
        const check = [...new Set(array)];
        if(check.length === array.length) return false;
        return true;
    };

    if(add === true){
        if(duplicate(copy) === false) return 1;
        return 2;
    } else
    if(dec === true){
        if(duplicate(copy) === false) return 3;
        return 4;
    };
};

module.exports = { sequenceClassifier };

//https://www.codewars.com/kata/5921c0bc6b8f072e840000c0/train/javascript