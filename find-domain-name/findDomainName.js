const domainName = (url) => {
  var domainArray = [];
  const split = url.split("");
  const length = url.split("").length;
  let c1 = /[./wh]/.test(split[0]);
  let c2 = /[./wt]/.test(split[1]);
  const dryer = () => {
    for (let k = 0; k < length; k++) {
      const checkStop = /[.]/.test(split[k]);
      if (checkStop === false) {
        domainArray.push(split[k]);
      } else if (checkStop === true) {
        break;
      }
    }
    return domainArray.join("");
  };

  const washingMachine = (splitURL) => {
    let countFirst = 0;
    for (let i = 0; i < length; i++) {
      const check = /[./]/.test(splitURL[i]);
      const doubleCheck = /[/]/.test(splitURL[i + 1]);
      if (check === true && doubleCheck === false) {
        for (let j = i; j < length; j++) {
          const checkEnd = /[./]/.test(splitURL[j]);
          if (checkEnd === false) {
            domainArray.push(splitURL[j]);
          } else if (checkEnd === true) {
            countFirst += 1;
            if (countFirst >= 2) break;
          }
        }
      }
    }
    return domainArray.join("");
  };

  if (c1 === true && c2 === false) {
    return dryer();
  } else if (c1 === false && c2 === false) {
    return dryer();
  }

  let firstWash = washingMachine(split);

  if (firstWash === "www") {
    let splitAgain = url.split("");
    if (splitAgain[4] === "s") {
      splitAgain.splice(0, 8);
    } else {
      splitAgain.splice(0, 7);
    }
    let secondWash = washingMachine(splitAgain);
    if (secondWash.slice(0, 3) === "www") {
      const washLength = secondWash.length;
      return secondWash.slice(3, washLength);
    }
    return secondWash;
  }
  return firstWash;
};

module.exports = { domainName };    

//so over cooked // the below 

// function domainName(url){
//     url = url.replace("https://", '');
//     url = url.replace("http://", '');
//     url = url.replace("www.", '');
//     return url.split('.')[0];
//   };


//https://www.codewars.com/kata/514a024011ea4fb54200004b/javascript