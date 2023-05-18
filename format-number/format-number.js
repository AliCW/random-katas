function formatNumber(number) {
    let numToString = number.toString();
    let splitNum = numToString.split('');
    if (splitNum.length <= 3) {
        return numToString
    }
    for (let i = splitNum.length; i >= 0; i -= 3) {
        splitNum.splice(i, 0, ',')
    }
    if(splitNum[splitNum.length - 1] === ',') {
        splitNum.pop()
    }
    if(splitNum[0] === ',') {
        splitNum.shift()
    }
    if(splitNum[0] === '-' && splitNum[1] === ',') {
        splitNum.splice(1, 1)
    }
    return splitNum.join('')
}

module.exports = { formatNumber }

//https://www.codewars.com/kata/565c4e1303a0a006d7000127/train/javascript


//function numberFormat(number) {
//    return number.toLocaleString();
//}