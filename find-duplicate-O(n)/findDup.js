const findDup = (arr) => {
    
    const dict = {};
    
    for(let i = 0; i < arr.length; i++) {
      if(dict[arr[i]] === 1){
        return arr[i];
      } else {
        dict[arr[i]] = 1;
      };
    };
  };

module.exports = { findDup };

//https://www.codewars.com/kata/558f0553803bc3c4720000af/train/javascript