const addTwoNumbers = function(l1, l2) {
    let firstArr = [...l1];
    let secondArr = [...l2]
    firstArr = firstArr.reverse().join('');
    secondArr = secondArr.reverse().join('')
    let firstNum = BigInt(firstArr)
    let secondNum = BigInt(secondArr)
    let sum = firstNum + secondNum;
    let sumString = sum.toString()
    sumString = sumString.split('')
    let returnArr = []
    for (let i = 0; i < sumString.length; i++) {
        let pushNum = Number(sumString[i])
        returnArr.push(pushNum)
    }
    return returnArr.reverse()
}

module.exports = { addTwoNumbers }


// const addTwoNumbers = function(l1, l2) { <------------------leetcode solution - linked list
//     const rgx = new RegExp(/\"val\"\:(\d+)/g);
//     const getValue = (data) => {
//       const string = JSON.stringify(data);
//       const result = [];
  
//       let item;
//       while ((item = rgx.exec(string))) result.push(Number(item[1]));
//         return result;
//     };
//       firstArray = getValue(l1)
//       secondArray = getValue(l2)
//       firstArray = firstArray.reverse().join('')
//       secondArray = secondArray.reverse().join('')
//       firstNum = BigInt(firstArray)
//       secondNum = BigInt(secondArray)
//       sum = firstNum + secondNum
//       sum = sum.toString()
//       sum = sum.split('').reverse()
//       let returnArray = []
//       for (let i = 0; i < sum.length; i++) {
//           let pushNum = Number(sum[i])
//           returnArray.push(pushNum)
//       }
      
//       function ListNode(val, next) {
//         this.val = (val === undefined ? 0 : val)
//         this.next = (next === undefined ? null : next)
//       }
  
//       let returnList = returnArray.reverse().reduce((acc, curr) => {
//         if (acc == null) {
//           acc = new ListNode(curr)
//         } else {
//           acc = new ListNode(curr, acc)
//         }
//         return acc
//       }, null);
//       return returnList;
//   }

//https://leetcode.com/problems/add-two-numbers/solutions/
