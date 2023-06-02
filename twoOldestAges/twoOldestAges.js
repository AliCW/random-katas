function twoOldestAges(ages){
    let sortArray = [...ages]
    sortArray = ages.sort((a, b) => a - b).reverse()
    return sortArray.slice(0, 2).reverse()
  }
  
module.exports = { twoOldestAges }

//https://www.codewars.com/kata/511f11d355fe575d2c000001/train/javascript