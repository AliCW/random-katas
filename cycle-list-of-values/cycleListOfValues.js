const cycle = (dir, arr, cur) => {
    if(arr.indexOf(cur) === -1) return null;
    let index = arr.indexOf(cur)
    if(dir > 0) {
        if(arr.length <= ++index) return arr[0]
        else return arr[index]
    } else {
        if(--index < 0) return arr[arr.length - 1];
        else return arr[index]
    }

}


module.exports = { cycle };

//https://www.codewars.com/kata/5456812629ccbf311b000078/train/javascript

// const cycle = (dir, arr, cur) => {
//     if(arr.indexOf(cur) === -1) return null;
//     let checkDoubles = false;
//     for(let i = 0; i < arr.length - 1; i++) {
//         if(arr[i] ===arr[i + 1]) {
//             checkDoubles = true;
//         }
//     }

//     if(dir > 0) { //!Greater than
//       //console.log("==>>", dir, arr, cur)
//       console.log(checkDoubles);
//         if(!checkDoubles) {
//             let index = arr.indexOf(cur) + dir;
//             console.log("dir=>", dir)
//             console.log("index==>>", index)
//             console.log("value==>>", arr[index])
//             console.log("array==>>", arr)
//             console.log("cur==>>", cur)
//             let output = arr[index]
//          return output
//         } else     
//         if(checkDoubles) return arr[arr.lastIndexOf(cur)];

//     } else if (dir < 0) { //!Less than
//         if(arr[arr.indexOf(cur)] === 1) return arr[arr.length + dir];

//         return arr[arr.indexOf(cur - 1)]
//     }
// };

