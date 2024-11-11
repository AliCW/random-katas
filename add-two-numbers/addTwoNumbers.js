const addTwoNumbers = (array1, array2) => {

    const firstNum = BigInt([... array1].reverse().join(''));
    const secondNum = BigInt([... array2].reverse().join(''));

    const sum = firstNum + secondNum;

    return sum.toString().split('').map((element) => {
        return Number(element);
    }).reverse();

};

module.exports = { addTwoNumbers };


//https://leetcode.com/problems/add-two-numbers/solutions/
