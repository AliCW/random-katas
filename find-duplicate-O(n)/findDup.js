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

//[12, 21, 18,  5, 16, 23, 20, 17,  1, 10, 17, 11, 29,  6, 28, 15,  7, 19, 25,  9, 27,  4, 14,  8, 13,  2, 26, 3, 22, 24], return 17