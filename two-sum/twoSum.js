const twoSum = function(nums, target) {
    let indexArray = [];
    for (let i = 0; i < nums.length; i++) {
        for(let j = 1; j < nums.length; j++) {
            let checkSum = nums[i] + nums[j];
            if(checkSum === target){
                if(i !== j) {
                    indexArray.push(i, j);
                    return indexArray;
                };
            };
        };
    };
};

module.exports = { twoSum };

//https://leetcode.com/problems/two-sum/