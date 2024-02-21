const consecutive = (arr, a, b) => {

    for(let i = 0; i < arr.length; i++) {
        let forward = i + 1;
        if(arr[i] === a) {
            if(arr[forward] === b) return true;
        }
        else
        if(arr[i] === b) {
            if(arr[forward] === a) return true;
        };
    };

    return false;

};

module.exports = { consecutive };

//https://www.codewars.com/kata/5f6d533e1475f30001e47514/train/javascript