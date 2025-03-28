const password = (str) => {

    if(str.length < 8) return false;
    if(!/[A-Z]/g.test(str)) return false;
    if(!/[a-z]/g.test(str)) return false;
    if(!/[0-9]/g.test(str)) return false;

    return true;

};

module.exports = { password };

//https://www.codewars.com/kata/56a921fa8c5167d8e7000053/train/javascript