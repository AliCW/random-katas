const pattern = (n) => {
    if (n < 1) return "";
    if(n === 1) return "1";
    const numString = n.toString();
    let output = [];
    
    output.push(numString.charAt(numString.length - 1).repeat(n));
    
    let mark = 0;
    for(let i = n; i > 0; i--) {
        let indexString = i.toString();
        output.push(output[mark].slice(0, mark) + indexString.charAt(indexString.length - 1).repeat(i));
        mark++;
    };

    output.shift();
    return output.join("\n");
};

module.exports = { pattern };


//https://www.codewars.com/kata/55ae997d1c40a199e6000018/train/javascript
