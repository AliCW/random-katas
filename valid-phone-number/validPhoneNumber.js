const validPhoneNumber = (string) => {
    
    if(string.length !== 14) return false;
    if(string[0] !== "(") return false;
    if(string[4] !== ")") return false;
    if(string[5] !== " ") return false;
    if(string[9] !== "-") return false;

    return true;
};

module.exports = { validPhoneNumber };

//https://www.codewars.com/kata/525f47c79f2f25a4db000025/train/javascript