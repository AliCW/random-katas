function twoOldestAges(ages){
    let sortArray = [...ages]
    sortArray = ages.sort((a, b) => a - b).reverse()
    return sortArray.slice(0, 2).reverse()
  }
  
module.exports = { twoOldestAges }