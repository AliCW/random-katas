const stripComments = (string, markers) => {
    let output = [];

    for(let j = 0; j < string.length; j++){
        if(string[j] === "\n") {
            if(output[output.length - 1] === " ") {
                j++;
                output.splice(output.length - 1, 1);
                if(output[output.length - 1] === "\\") output.push('n');
                else output.push('\n');
            };
        };
        if(markers.includes(string[j])) {
            for(let k = j; k < string.length; k++) {
                j++;
                if(string[k] === '\n') {
                    if(output[output.length - 1] === " ") output.splice(output.length - 1, 1);
                    if(markers.includes(string[j])) {
                        j--;
                        break;
                    };
                    output.push(string[k]);
                    break;
                };
            };
        };
        output.push(string[j]);
    };

    for (let i = output.length - 1; i > 0; i--){
        if(output[i] === " " || output[i] === undefined) output.splice(i, 1);
        else break;
    };
    
    return output.join('');
};

module.exports = { stripComments };

//https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript

