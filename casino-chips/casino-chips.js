function solve(arr) {
    let arrayCopy = [...arr]
    
    if(arrayCopy[0] === 1 && arrayCopy[1] === 1 && arrayCopy[2] === 1) return 1;

    let sortedArray = arrayCopy.sort((a, b) => a - b)
    let count = 0
    for(let i = 0; i <= 1; i--) {
        count++;
        let highestIndex = sortedArray.indexOf(Math.max(...sortedArray))
        let findSecond = sortedArray.sort((a, b) => a - b)
        let secondHighest = findSecond[1]
        let secondIndex = sortedArray.indexOf(secondHighest) 
        sortedArray[highestIndex] -= 1
        sortedArray[secondIndex] -= 1
        if(sortedArray[1] <= 0 && sortedArray[0] <= 0) {
            return count
        }
    }
    return count
}

module.exports = { solve }

//https://www.codewars.com/kata/5e0b72d2d772160011133654/train/javascript


//find the two highest integers and negate by one
//count for each negate until one of the highest is zero
//return count at this point

//brute force approach which does not work with large numbers
