const checkThreeAndTwo = (array) => {
    const check = {};
    array.forEach((element) => {
        if(check[element] === undefined) check[element] = 1;
        else { check[element] += 1 };
    });

    if(Object.keys(check).length !== 2) {
        return false;
    };
    if(Object.values(check)[0] === 3 || Object.values(check)[1] === 2){
        return true
    };
    if(Object.values(check)[0] === 2 || Object.values(check)[1] === 3){
        return true
    };
    return false;

};

module.exports = { checkThreeAndTwo };

//https://www.codewars.com/kata/5a9e86705ee396d6be000091/train/javascript