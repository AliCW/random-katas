function alphanumeric(string) {
    if(string === "") return false;
    const checkSpaces = /[\s]/g.test(string);
    const checkSpecialChars = /[-_!{}()"£$%^&*¬`,.<>/@~#=+]/g.test(string);
    if(checkSpaces || checkSpecialChars) return false;
    else return true;
};

module.exports = { alphanumeric };

//https://www.codewars.com/kata/526dbd6c8c0eb53254000110/train/javascript