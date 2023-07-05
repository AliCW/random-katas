const mergeTwoSortedLists = (list1, list2) => {
    console.log(list1)

    let merged = list1.concat(list2);

    merged.sort((a, b) => {
        return a - b
    })
    return merged
}

module.exports = { mergeTwoSortedLists }

//  let dummy = new ListNode(0, null); refactor

// var mergeTwoLists = function(list1, list2) { <-------linked list solution 
//     const rgx = new RegExp(/\"val\"\:(-\d+|\d+)/g);
//     const getValue = (data) => {
//       const string = JSON.stringify(data);
//       const result = [];
  
//       let item;
//       while ((item = rgx.exec(string))) result.push(Number(item[1]));
//         return result;
//     };
//       let array1 = getValue(list1)
//       let array2 = getValue(list2)
//       let merged = array1.concat(array2);
  
//       merged.sort((a, b) => {
//           return a - b
//       })
  
//     function ListNode(val, next) {
//       this.val = (val === undefined ? 0 : val)
//       this.next = (next === undefined ? null : next)
//     }
//       let returnList = merged.reverse().reduce((acc, curr) => {
//           if (acc == null) {
//             acc = new ListNode(curr)
//           } else {
//             acc = new ListNode(curr, acc)
//           }
//           return acc
//         }, null);
//       return returnList
//   }
  

//https://leetcode.com/problems/merge-two-sorted-lists/