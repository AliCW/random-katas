function moveZeroes(array) {
    let arrayZeroes = [...array]
    const remove = arrayZeroes.filter(element => element !== 0)
    const add = arrayZeroes.filter(element => element === 0)
    return remove.concat(add)
  }
  
module.exports = { moveZeroes }
  
//https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript