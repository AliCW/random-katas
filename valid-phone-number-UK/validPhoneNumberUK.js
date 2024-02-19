const validateNumber = (str) => {
  console.log(str);

  const check = str.replace(/[\-]/g, "");

  if (
    check.length === 13 &&
    check.charAt(0) === "+" &&
    check.charAt(1) === "4" &&
    check.charAt(2) === "4"
  ) {
    return "In with a chance";
  } else if (
    check.length === 11 &&
    check.charAt(0) === "0" &&
    check.charAt(1) === "7"
  ) {
    return "In with a chance";
  }

  return "Plenty more fish in the sea";
};


module.exports = { validateNumber };

//https://www.codewars.com/kata/581a52d305fe7756720002eb/train/javascript