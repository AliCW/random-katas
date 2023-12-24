const dashatize = (num) => {

    num = Math.abs(num);
    if(num < 10) return num.toString();

    const string = num.toString();
    const split = string.split("");

    let hyphenate = split.map((element, index) => {
        if(element % 2 && index !== 0 && index !== split.length - 1 && index - 1 !== "-") {
            return "-" + element + "-";
        } else {
            return element;
        };
    });

    let output = hyphenate.join("")
    output = output.split("")
    
    if(/[1|3|5|7|9]/.test(output[output.length - 1])) {
        output.splice(output.length - 1, 0, "-");
    };

    if(/[3|5|7|9]/.test(output[0]) && output[1] !== "-") {
        output.splice(1, 0, "-");
    };
    
    for(let i = 0; i < output.length; i++) {
        if(output[i] === "-" && output[i + 1] === "-") {
            output.splice(i, 1);
        };
    };

    return output.join("");

};

module.exports = { dashatize };

//https://www.codewars.com/kata/58223370aef9fc03fd000071/train/javascript