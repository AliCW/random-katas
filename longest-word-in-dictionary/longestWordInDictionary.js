const findLongestWord = (str, arr) => {

    let confirmed = [];

    let stringDict = {};
    let sortedArr = arr.sort((a, b) => {
        return b.length - a.length;
    })

    for(let i = 0; i < str.length; i++) {
        stringDict[str[i]] = 0
    }

    for(let j = 0; j < str.length; j++) {
        stringDict[str[j]] += 1
    }

    for(let k = 0; k < sortedArr.length; k++){
        let check = {}
        for(let l = 0; l < sortedArr[k].length; l++){
            check[sortedArr[k][l]] = 0
        }
        for(let m = 0; m < sortedArr[k].length; m++) {
            check[sortedArr[k][m]] += 1;

        }

        for(let n = 0; n < sortedArr.length; n++) {
            let build = ""
            for(let key in check) {
                if(stringDict[key] >= check[key]){
                    build += key.repeat(check[key])
                } else {
                    break;
                }
            }
            confirmed.push(build)
        }

    }

    confirmed = confirmed.sort((a, b) => {
        return b.length - a.length;
    })

    console.log(str, arr)

    return confirmed[0];


};

module.exports = { findLongestWord };


//<<--- below does not account for duplicate letters - should try the dictionary solution

// const matches = [];

// for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr.length; j++) {
//         if(str.includes(arr[i][j]) === false) break;
//         if(j === arr.length - 1 && str.includes(arr[i][j]) === true) {
//             matches.push(arr[i]);
//         }
//         //console.log(arr[i][j], str.includes(arr[i][j]));
//     };
// };

// if(matches.length === 0) return '';

// const sorted = matches.sort((a, b) => {
//     return b.length - a.length;
// })
// // console.log(matches)
// // console.log(sorted)

// if(sorted[0].length !== sorted[1].length) return sorted[0];