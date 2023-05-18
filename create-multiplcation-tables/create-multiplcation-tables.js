function createMultiplicationTable(number) {
    let result = []
    let multiplyBy = 1
    let multiplyBySecondArg = 1
    for(let i = 0; i < number; i++) {
        let line = [];
        for(let j = 0; j < number; j++) {
            line.push(multiplyBy * multiplyBySecondArg)
            multiplyBy += 1
        }
        result.push(line)
        multiplyBySecondArg += 1
        multiplyBy = 1
    }
    return result
}

module.exports = { createMultiplicationTable }

//https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript