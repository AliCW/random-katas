const duplicateEncoder = (string) => {

  const split = string.toLowerCase().split('');
  const dict = {};
  let output = '';

  for(let j = 0; j < split.length; j++) { 
    dict[split[j]] = 1 + (dict[split[j]] || 0);
  };


  for (let i = 0; i < split.length; i++) {
    if (dict[split[i]] === 1) {
      output += '(';
    } else { output += ')'; };
  };

  return output;
};

module.exports = { duplicateEncoder };

//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
