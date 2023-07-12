const removeElements = (nums, val) => {
  const loop = nums.length;
  const copy = [...nums];
  let output = [];
  for (let i = 0; i < copy.length; i++) {
    if (copy[i] !== val) {
      output.push(copy[i]);
    };
  };
  for (let i = 0; i < loop; i++) {
    nums.unshift(output[i]);
    nums.pop();
  };
  nums.reverse();
  return output.length;
};

module.exports = { removeElements };

//https://leetcode.com/problems/remove-element/description/