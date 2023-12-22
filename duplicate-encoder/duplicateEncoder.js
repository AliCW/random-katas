const duplicateEncoder = (word) => {
  const flattened = word.toLowerCase();
  const split = flattened.split("");
  const dict = {};
  let output = "";

  split.forEach((element) => {
    dict[element] = 0;
  });
  split.forEach((element) => {
    dict[element] += 1;
  });

  for (let i = 0; i < split.length; i++) {
    if (dict[split[i]] === 1) {
      output += "(";
    } else output += ")";
  };

  return output;
};

module.exports = { duplicateEncoder };

//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
