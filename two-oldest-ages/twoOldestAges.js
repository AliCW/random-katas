const twoOldestAges = (ages) => {
    return [...ages].sort((a, b) => a - b).reverse().slice(0, 2);
};
  
module.exports = { twoOldestAges };

//https://www.codewars.com/kata/511f11d355fe575d2c000001/train/javascript