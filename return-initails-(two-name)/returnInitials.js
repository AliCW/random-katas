const returnInitials = (string) => {
    return string.charAt(0).toUpperCase() + "." + string.split(' ')[1].charAt(0).toUpperCase();
};

module.exports = { returnInitials };

//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript