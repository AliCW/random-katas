const longestCommonPrefix = (array) => {
  let manipulate = [...array];
  let referenceArray = [];
  let outputArr = [];
  let count = 0;

  if (manipulate.includes("")) return "";

  if (manipulate.length === 0) return "";
  if (manipulate.length === 1) return manipulate[0];

  const isEqual = (currentValue) => currentValue === manipulate[0];
  const isEqualChar = (currentValue) => currentValue === manipulate[0][0];

  if (manipulate.every(isEqual) === true) return manipulate[0];

  manipulate.forEach((element, index) => {
    if (element[0][0] === manipulate[0][0]) {
      count++;
    }
  });
  if (count !== manipulate.length) {
    return "";
  }

  manipulate = manipulate.sort((a, b) => {
    return a.length - b.length;
  });
  manipulate.reverse();

  for (let i = 0; i < manipulate[0].length; i++) {
    referenceArray[i] = manipulate[0][i];
  }

  for (let k = 0; k < manipulate.length; k++) {
    for (let j = 0; j < manipulate[k].length; j++) {
      if (manipulate[k][j] === referenceArray[j][0]) {
        referenceArray[j] += manipulate[k][j];
      }
    }
  }

  let whittle = [];
  let leadingChars = 0;

  let detectFirstLength = referenceArray[0].length;
  if (detectFirstLength === 0) {
    return "";
  } else {
    for (let l = 0; l < referenceArray.length; l++) {
      if (referenceArray[l].length === detectFirstLength) {
        outputArr += referenceArray[l];
      }
      if (referenceArray[l].length < detectFirstLength) {
        outputArr = outputArr.split("");
        if (outputArr.every(isEqualChar) === true) {
          //determine how many leading chars of the same letter
          if (manipulate[0][1] !== manipulate[1][1]) {
            return manipulate[0][0];
          }
          for (let p = 1; p < manipulate.length; p++) {
            console.log(manipulate[0][1], manipulate[p][1]);
            if (manipulate[0][1] !== manipulate[p][1]) {
              console.log("here");
              return manipulate[0][0];
            }
          }

          manipulate.reverse();
          for (let z = 0; z < manipulate[0].length; z++) {
            if (manipulate[0][z] === outputArr[z]) {
              leadingChars++;
            }
          }
          if (leadingChars === 2) {
            for (let w = 0; w < leadingChars; w++) {
              whittle.push(outputArr[0]);
            }
            return whittle.join("");
          }

          for (let y = 0; y < leadingChars - 1; y++) {
            whittle.push(outputArr[0]);
          }
          return whittle.join("");
        } else {
          uniqueReturn = [...new Set(outputArr)];
          return uniqueReturn.join("");
        }
      }
    }
    return "";
  }
};

module.exports = { longestCommonPrefix };

//we are specifically looking for a prefix

//create a loop that goes thru referenceArray - detect the length of first element,
//loop and copy to output until the length detection changes, return at this point

//loop through the array & then through the first element
//denote letters and their index - copy to object, index as key, letter as value
//loop through the other words - go to length of first word
// detect IF ALL other words have matching letters & indices
//return matches or an empty string if no matches are found
