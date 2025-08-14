const binaryToString = (string) => {
  
    const convert = (binary) => {
        const code = parseInt(binary, 2);
        return String.fromCharCode(code);
    };

    if(string === '') return '';
    if(string.length <= 8) return convert(string);

    const split = string.split('');
    const arr = [];
    let eight = 0;
    let str = '';
    
    for(let i = 0; i < split.length; i++){
        str += split[i];
        eight++;
        if(eight === 8){
            arr.push(convert(str));
            str = '';
            eight = 0;
        };
    };

    return arr.join('');
};

module.exports = { binaryToString };

//https://www.codewars.com/kata/5583d268479559400d000064/train/javascript