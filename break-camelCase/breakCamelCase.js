const breakCamelCase = (string) => {
    const camel = string.split('');

    for(let i = 1; i < camel.length; i++){
        if(camel.join('').charCodeAt(i) >= 65 && 
        camel.join('').charCodeAt(i) <= 90 && 
        camel.join('').charCodeAt(i - 1) !== 32){
            camel.splice(i, 0, " ");
        };
    };

    return camel.join('');
};

module.exports = { breakCamelCase };


//https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript