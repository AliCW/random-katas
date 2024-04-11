const histogram = (array) => {

    let output = "";
    let num = 6;

    [...array].reverse().forEach((element) => {
        output += num + "|";
        num--;
        if(element === 0) {
            output += "\n";
        } else {
            output += "#".repeat(element) + ` ${element}` + "\n";
        };
    });

    return output;

};

module.exports = { histogram };

//https://www.codewars.com/kata/57d532d2164a67cded0001c7/train/javascript
