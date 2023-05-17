function whichAreIn(array1, array2) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        
        for (let j = 0; j < array2.length; j++) {
            if (array2[j].includes(array1[i]) === true) {
                result.push(array1[i])
            }
        }
    }
    let finalRes = [...new Set(result)]
    return finalRes.sort();
}

module.exports = { whichAreIn }

//https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript