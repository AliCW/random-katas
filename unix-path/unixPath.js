const combinePathsUri = (...strings) => {
    if(strings.length === 0) return '/';
    out = [];
    for(let i = 0; i < strings.length; i++){
        if(strings[i].length === 0 || strings[i].trim().length === 0) continue;
        let string = strings[i].match(/[A-Za-z\\\/\.\-\_\!\{\}\(\)\"\£\$\%\^\&\*\¬\`\,\<\>\@\~\#\=\+]/g).map((element) => {
            if(element == "\\") return "/";
            else return element;
        });
        if(i === 0) out.push('/' + string.join('') + '/');
        else out.push(string.join('') + '/');
    }; 

    out.unshift('/')
    check = [...out].join('').split('');
    out = out.join('').split('').map((element, index) => {
        if(element === '/' && check[index + 1] === '/'){
            
        }
        else return element;
    });
    if(out.join('').length <= 1) return "/";
    out.splice(out.length - 1, 1);

    return out.join('');
};

module.exports = { combinePathsUri };

//https://www.codewars.com/kata/564b323d7ff0ed401400015f/train/javascript