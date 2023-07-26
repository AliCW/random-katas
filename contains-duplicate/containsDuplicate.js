const containsDuplicate = (nums) => {
    let numberCount = {};

    for(let i = 0; i < nums.length; i++) {
        numberCount[nums[i]] = 0;
    };

    const uniqueCount = Object.keys(numberCount).length;

    if(nums.length === uniqueCount) {
        return false;
    } return true;
};

module.exports = { containsDuplicate };