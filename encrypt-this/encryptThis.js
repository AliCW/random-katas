const encryptThis = (string) => {
    if(string.length === 0) return "";
    if(string.length === 1) return string.charCodeAt(0).toString();

    const stringArray = string.split(" ");
    let output = [];

    stringArray.forEach((element) => {
        let split = element.split("");
        split.shift();
        if(element.length === 1) {
            output.push(element.charCodeAt(0).toString());
        } else
        if(element.length === 2) {
            const push = element.charCodeAt(0).toString() + element.charAt(1);
            output.push(push);
        } else {
            split.shift();
            split.pop();
            const last = element.charAt(element.length - 1).toString();
            const second = element.charAt(1).toString();
            split.unshift(last);
            split.unshift(element.charCodeAt(0).toString());
            split.push(second);
            output.push(split.join(""));
        };
    });
    return output.join(" ");
};

module.exports = { encryptThis };

//https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript