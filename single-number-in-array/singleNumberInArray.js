const singleNumber = (nums) => {
    const numberTable = {};

    for(let i = 0; i < nums.length; i++) {
        numberTable[nums[i]] = 0;

    };

    const keyArray = Object.keys(numberTable);

    for(let j = 0; j < nums.length; j++) {
        if(keyArray.includes(nums[j].toString())) {
            numberTable[nums[j]] += 1;
        };
    };
    
    for(key in numberTable) {
        if(numberTable[key] === 1) {
            return Number(key);
        };
    };
};

module.exports = { singleNumber };