const twoSum = (array, target) => {
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[i] + array[j] === target){
                return [i, j];
            };
        };
    };
};

module.exports = { twoSum };

//https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript