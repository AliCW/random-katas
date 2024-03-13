const reverseMiddle = (arr) => {
    console.log(arr)
    if(arr.length % 2 === 0) {
        console.log([arr[arr.length / 2]].concat([arr[arr.length / 2 - 1]]))
        return [arr[arr.length / 2]].concat([arr[arr.length / 2 - 1]]);
    } else {
        console.log([arr[Math.round(arr.length / 2)]].concat([arr[Math.round(arr.length / 2 - 1)]]).concat([arr[Math.round(arr.length / 2 - 2)]]))
        return [arr[Math.round(arr.length / 2)]].concat([arr[Math.round(arr.length / 2 - 1)]]).concat([arr[Math.round(arr.length / 2 - 2)]]);
    };
};

module.exports = { reverseMiddle };

//https://www.codewars.com/kata/5a043724ffe75fbab000009f/train/javascript