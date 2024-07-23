const disemvowel = (string) => {
    console.log(string)
    console.log(string.replace(/[aeiou]/gi, ''))
    return string.replace(/[aeiou]/gi, '');
};

module.exports = { disemvowel };

//https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript