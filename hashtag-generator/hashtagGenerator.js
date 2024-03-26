const generateHashtag = (string) => {

    if(!/[\sA-Za-z]/g.test(string.charAt(0))) return false;
    
    let split = string.split(" ");
    let output = [];
    let countSpaces = 0;

    for(let i = 0; i < string.length; i++) {
        if(string[i] === " ") countSpaces++;
    };
    if(countSpaces === string.length) return false;
    
    split.forEach((element) => {
        output.push(element.charAt(0).toUpperCase() + element.slice(1, element.length));
    });
    output.unshift("#");

    if(output.join("").length > 140) return false;

    return output.join("");
};

module.exports = { generateHashtag };

//https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript