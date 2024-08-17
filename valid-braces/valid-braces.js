const validBraces = (string) => {
    if (string[0] === ')' || string[0] === ']' || string[0] === '}'){
        return false;
    };
    let closed = 0;
    string.split('').forEach((element) => {
        if(element === ')' || element === ']' || element === '}'){
            closed++;
        };
    });
    if(closed === 0) return false;

    let normal = false;
    let square = false;
    let curl = false;
    const lastOpen = [];
    for(let i = 0; i < string.length; i++) {
        if(string[i] === '('){
            lastOpen.push('(');
            normal = true;
        }
        else if(string[i] === ')' && normal === true){
            if(lastOpen[lastOpen.length - 1] !== '(') return false;
            if(lastOpen[lastOpen.length - 1] === '(') lastOpen.pop();
            normal = false;
        }
        else if(string[i] === ')' && normal === false){
            if(lastOpen[lastOpen.length - 1] === '(') {
                lastOpen.pop();
            } else { return false; };
        }
        else if(string[i] === '['){
            lastOpen.push('[');
            square = true;
        }
        else if(string[i] === ']' && square === true){
            if(lastOpen[lastOpen.length - 1] !== '[') return false;
            if(lastOpen[lastOpen.length - 1] === '[') lastOpen.pop();
            square = false;
        }
        else if(string[i] === ']' && square === false){
            if(lastOpen[lastOpen.length - 1] === '['){
                lastOpen.pop();
            } else { return false; };
        }
        else if(string[i] === '{'){
            lastOpen.push('{');
            curl = true;
        }
        else if(string[i] === '}' && curl === true){
            if(lastOpen[lastOpen.length - 1] !== '{') return false;
            if(lastOpen[lastOpen.length - 1] === '{') lastOpen.pop();
            curl = false;
        }
        else if(string[i] === '}' && curl === false){
            if(lastOpen[lastOpen.length - 1] === '{'){
                lastOpen.pop();
            } else { return false; };
        };      
    };
    return true;
};

module.exports = { validBraces };

//https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript